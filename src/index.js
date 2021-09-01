import React, {useEffect, useState} from 'react';
import {Provider, useGlobalContext} from './context';
import components from './components';
import ErrorBoundary from '@kne/react-error-boundary';
import classnames from 'classnames';
import axios from 'axios';
import get from 'lodash/get';

const ErrorMsg = ({error}) => {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return <div>渲染发生错误，请检查配置或回滚操作</div>;
};

const render = (data) => {
    const target = Array.isArray(data) ? data : [data];

    return target.map((item) => {
        if (typeof item === 'string') {
            return item;
        }
        const {id, component, props, children} = item;
        const CurrentComponent = components[component];
        if (!CurrentComponent) {
            return null;
        }

        const newProps = Object.assign({}, props);

        if (children) {
            newProps.children = render(children);
        }

        return <ErrorBoundary errorComponent={ErrorMsg} key={id}>
            <CurrentComponent {...newProps} className={classnames(newProps.className, `id_${id}`)} $id={id}/>
        </ErrorBoundary>;
    });
};

const componentCache = {};

const withRemote = (WrappedComponent) => {
    return ({url, fetchRemote, content, fallback = null, ...props}) => {
        const [isLoading, setIsLoading] = useState(true);
        const [requestData, setRequestData] = useState({});
        useEffect(() => {
            if (url) {
                setIsLoading(true);
                if (!componentCache[url]) {
                    componentCache[url] = (fetchRemote || axios.get)(url);
                }
                componentCache[url].then((res) => {
                    setRequestData(res.data);
                    setIsLoading(false);
                });
            }
        }, [url]);

        if (content) {
            return <WrappedComponent {...props} content={content}/>
        }

        if (isLoading) {
            return fallback;
        }
        return <WrappedComponent {...props} content={requestData} fetchRemote={fetchRemote} fallback={fallback}/>;
    };
};

const Render = withRemote(({lib = {}, content, emitter, ...renderProps}) => {
    const prevContext = useGlobalContext();
    const variable = Object.assign({}, get(prevContext, 'variable'), content.variable);
    const data = content.data || [];
    const functions = Object.assign({}, get(prevContext, 'functions'), content.functions);
    const components = Object.assign({}, get(prevContext, 'components'), content.components);
    return (
        <Provider value={{
            lib,
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

export {default as profile, profileMap} from './profile';

