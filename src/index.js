import React, {useEffect} from 'react';
import {Provider, useGlobalContext} from './context';
import components from './components';
import ErrorBoundary from '@kne/react-error-boundary';
import classnames from 'classnames';
import get from 'lodash/get';

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

        return <CurrentComponent {...newProps} className={classnames(newProps.className, `id_${id}`)} $id={id}
                                 key={id}/>;
    });
};

const ErrorMsg = ({error}) => {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return <div>渲染发生错误，请检查配置或回滚操作</div>;
};

const Render = ({lib = {}, content, emitter}) => {
    const prevContext = useGlobalContext();
    const variable = Object.assign({}, get(prevContext, 'variable'), content.variable);
    const data = content.data || [];
    const functions = Object.assign({}, get(prevContext, 'functions'), content.functions);
    const components = Object.assign({}, content.components);
    return (
        <ErrorBoundary errorComponent={ErrorMsg}>
            <Provider value={{
                lib,
                functions,
                components,
                data,
                variable,
                emitter,
                isEditor: !!emitter
            }}>
                {render(data)}
            </Provider>
        </ErrorBoundary>
    );
};

export default Render;

export {default as profile, profileMap} from './profile';

