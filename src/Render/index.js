import React, {useEffect, useMemo, useRef} from 'react';
import {message, Modal} from 'antd';
import {Provider, useGlobalContext} from "../context";
import withRemote from './withRemote';
import get from 'lodash/get';
import createRender from './createRender';

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

    const render = createRender({renderIdRef, renderProps});

    return (
        <Provider value={{
            id,
            lib: Object.assign({}, {
                message,
                react: React,
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
