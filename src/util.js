import React, {useEffect, isValidElement} from 'react';
import {useGlobalContext, Provider} from './context';
import Render from './index';
import get from 'lodash/get';
import isPlainObject from 'lodash/isPlainObject';

const escape = (value) => {
    if (typeof value === 'string' && value.indexOf('\\$') === 0) {
        return value.replace('\\$', '$');
    }
    return value;
};

const parseVariable = (value) => {
    if (typeof value !== 'string') {
        return {
            name: value,
            path: ''
        };
    }
    if (!/[.\[]/.test(value)) {
        return {
            name: value,
            path: ''
        };
    }
    const dotIndexList = ['[', '.'].map((sign) => value.indexOf(sign)).filter((index) => index > -1);
    if (dotIndexList.length === 0) {
        return {
            name: value,
            path: ''
        };
    }
    const dotIndex = Math.min(...dotIndexList);
    return {
        name: value.substr(0, dotIndex),
        path: value.substr(dotIndex).replace(/^\./, '')
    };
};

export const extractProps = (props = {}) => {
    const output = {
        props: {}, extract: {}
    };
    Object.keys(props).forEach((key) => {
        if (key.charAt(0) === '$') {
            output.extract[key] = props[key];
        } else {
            output.props[escape(key)] = props[key];
        }
    });

    return output;
};

export const applyVariable = (WrappedComponent) => {
    return (originProps) => {
        const {variable, functions, components, ...otherContext} = useGlobalContext();
        const {emitter} = otherContext;
        const {props, extract} = extractProps(originProps);
        const currentVariable = Object.assign({}, variable, extract);

        const transformProps = (target) => {
            if (typeof target === 'string') {
                const propsValue = target, parsedPropsValue = parseVariable(target);
                if (currentVariable.hasOwnProperty(propsValue)) {
                    return currentVariable[propsValue];
                }
                if (currentVariable.hasOwnProperty(parsedPropsValue.name)) {
                    return get(currentVariable[parsedPropsValue.name], parsedPropsValue.path);
                }
                if (functions.hasOwnProperty(propsValue)) {
                    if (typeof functions[propsValue] === 'string') {
                        return (...args) => {
                            const newFunction = new Function('args', 'variable', 'functions', 'lib', functions[propsValue]);
                            return newFunction(args, currentVariable, functions, otherContext.lib);
                        };
                    }
                    if (typeof functions[propsValue] === 'function') {
                        return functions[propsValue];
                    }
                    return;
                }
                if (components.hasOwnProperty(propsValue)) {
                    if (typeof components[propsValue] === "object") {
                        return <Render content={components[propsValue]} lib={otherContext.lib}
                                       emitter={otherContext.emitter}/>;
                    }
                    if (typeof components[propsValue] === "string") {
                        return <Render url={components[propsValue]} lib={otherContext.lib}
                                       emitter={otherContext.emitter} {...otherContext.renderProps}/>;
                    }
                }
                return escape(propsValue);
            }
            if (isPlainObject(target) && !isValidElement(target)) {
                const newTarget = {};
                Object.keys(target).forEach((key) => {
                    newTarget[key] = transformProps(target[key]);
                });
                return newTarget;
            }
            if (Array.isArray(target)) {
                return target.map((item) => {
                    return transformProps(item);
                });
            }
            return target;
        };

        const newProps = transformProps(props);

        useEffect(() => {
            emitter && emitter.emit('component-appended', currentVariable.$id);
            return () => {
                emitter && emitter.emit('component-removed', currentVariable.$id);
            };
        }, [emitter]);
        if (Object.keys(extract).length > 0) {
            return <Provider
                value={Object.assign({}, otherContext, {functions, components, variable: currentVariable})}>
                <WrappedComponent {...newProps}/>
            </Provider>;
        }
        return <WrappedComponent {...newProps}/>;
    };
};