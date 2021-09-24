import React, {useState, useEffect, createElement} from 'react';
import classnames from 'classnames';
import {currentComponents} from "../preset";
import ErrorBoundary from '@kne/react-error-boundary';
import RenderTask from './RenderTask';

const ErrorMsg = ({error}) => {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return <div>渲染发生错误，请检查配置或回滚操作</div>;
};

const createRender = ({renderIdRef, renderProps}) => {
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
    return render;
};

export default createRender;