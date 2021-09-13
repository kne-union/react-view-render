import React, {useEffect, useState, useRef, useMemo} from 'react';
import {message, Modal} from 'antd';
import {Provider, useGlobalContext} from './context';
import {currentComponents} from './preset';
import ErrorBoundary from '@kne/react-error-boundary';
import classnames from 'classnames';
import {fetchRemote as resetFetchRemote} from './preset';
import get from 'lodash/get';
import merge from 'lodash/merge';

const ErrorMsg = ({error}) => {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return <div>渲染发生错误，请检查配置或回滚操作</div>;
};

const componentCache = {};

const withRemote = (WrappedComponent) => {
    return ({url, fetchRemote, content, fallback = null, ...props}) => {
        const {id, rootIsMount, renderEvent} = props;
        const [isLoading, setIsLoading] = useState(true);
        const [requestData, setRequestData] = useState({});
        useEffect(() => {
            if (url) {
                const loadError = (e) => {
                    console.error(url, id, e);
                };
                setIsLoading(true);
                if (!componentCache[url]) {
                    componentCache[url] = (fetchRemote || resetFetchRemote)(url);
                }
                componentCache[url].then((res) => {
                    let content = res.data;
                    if (typeof content === 'string') {
                        try {
                            content = JSON.parse(res.data);
                        } catch (e) {
                            loadError(e);
                        }
                    }
                    setRequestData(content);
                    setIsLoading(false);
                }, (e) => {
                    loadError(e);
                });
            }
        }, [url]);

        useMemo(() => {
            if (rootIsMount) {
                renderEvent.emit('add-render-task', id);
            }
        }, [rootIsMount]);

        if (!url && content) {
            return <WrappedComponent {...props} content={content}/>
        }

        if (isLoading) {
            return fallback;
        }
        return <WrappedComponent {...props} content={merge({}, requestData, content)} fetchRemote={fetchRemote} fallback={fallback}/>;
    };
};

const RenderTask = ({emitter, id, rootIsMount, children}) => {
    const idRef = useRef(id);
    idRef.current = id;
    useMemo(() => {
        if (rootIsMount) {
            emitter.emit('add-render-task', idRef.current);
        }
    }, [emitter, rootIsMount]);
    return children;
};

const Render = withRemote(({id, lib = {}, content, emitter, ...renderProps}) => {
    const prevContext = useGlobalContext();
    const variable = Object.assign({}, get(prevContext, 'variable'), content.variable);
    const data = content.data || [];
    const functions = Object.assign({}, get(prevContext, 'functions'), content.functions);
    const components = Object.assign({}, get(prevContext, 'components'), content.components);
    const renderIdRef = useRef(id);
    renderIdRef.current = id;

    useEffect(() => {
        if (renderProps.rootIsMount) {
            renderProps.renderEvent.emit('complete-render-task', renderIdRef.current);
        }
    }, [renderProps.renderEvent, renderProps.rootIsMount]);

    const render = (data) => {
        const target = Array.isArray(data) ? data : [data];

        return target.map((item) => {
            if (typeof item === 'string') {
                return item;
            }
            const {id, component, props, children} = item;
            const CurrentComponent = currentComponents[component];
            if (!CurrentComponent) {
                return null;
            }

            const newProps = Object.assign({}, props);

            if (children) {
                newProps.children = render(children);
            }
            const taskId = `${renderIdRef.current}:${id}`;
            return <RenderTask id={taskId} emitter={renderProps.renderEvent}
                               rootIsMount={renderProps.rootIsMount} key={id}>
                <ErrorBoundary errorComponent={ErrorMsg}>
                    <CurrentComponent {...newProps} className={classnames(newProps.className, `id_${id}`)} $id={id}
                                      $taskId={taskId}/>
                </ErrorBoundary>
            </RenderTask>;
        });
    };

    return (
        <Provider value={{
            id,
            lib: Object.assign({}, {
                message,
                modal: {
                    confirm: Modal.confirm,
                    info: Modal.info,
                    success: Modal.success,
                    error: Modal.success,
                    warning: Modal.warning
                }
            }, lib),
            functions,
            components,
            data,
            variable,
            emitter,
            renderProps,
            isEditor: !!emitter
        }}>
            {render(data)}
        </Provider>
    );
});

export default Render;

