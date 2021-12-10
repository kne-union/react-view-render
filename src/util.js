import React, {useEffect, useRef, isValidElement} from 'react';
import {useGlobalContext, Provider} from './context';
import Render from './Render';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import isPlainObject from 'lodash/isPlainObject';
import omit from 'lodash/omit';
import classnames from 'classnames';

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

const createTransformProps = ({functions, components, currentVariable, otherContext}) => {
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
                const parseFunction = (funcKey, variable, functions, lib) => {
                    const func = functions[funcKey];
                    if (typeof func === 'string') {
                        return (...args) => {
                            try {
                                const newFunction = new Function('args', 'variable', 'functions', 'lib', func);
                                const others = omit(functions, funcKey), output = {};

                                Object.keys(others).forEach((key) => {
                                    output[key] = parseFunction(key, variable, others, lib);
                                });

                                return newFunction(args, variable, output, lib);
                            } catch (e) {
                                console.error(`${funcKey}函数执行出现错误:\n${func}`);
                                throw e;
                            }
                        }
                    }
                    if (typeof func === 'function') {
                        return func;
                    }
                    return;
                };

                return parseFunction(propsValue, currentVariable, functions, otherContext.lib);
            }
            if (components.hasOwnProperty(propsValue)) {
                if (typeof components[propsValue] === "object") {
                    return <Render id={`${otherContext.id}:${propsValue}`} content={components[propsValue]}
                                   lib={otherContext.lib}
                                   emitter={otherContext.emitter}/>;
                }
                if (typeof components[propsValue] === "string") {
                    return <Render id={`${otherContext.id}:${propsValue}`} url={components[propsValue]}
                                   lib={otherContext.lib}
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
    return transformProps;
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

const Debug = ({data, children}) => {
    return <div className="view-render-debug">
        <span className="view-render-debug-btn" onClick={() => {
            console.log(data);
        }}>debug</span>
        {children}
    </div>;
};

export const applyVariable = (WrappedComponent) => {
    const ApplyVariable = ({_debug, $taskId, ...originProps}) => {
        const {variable, functions, components, ...otherContext} = useGlobalContext();
        const {emitter} = otherContext;
        const {props, extract} = extractProps(originProps);
        const currentVariable = Object.assign({}, variable, extract);

        const transformProps = createTransformProps({functions, components, currentVariable, otherContext});

        const {classList, ...newProps} = transformProps(props);

        useEffect(() => {
            // 添加样式
            const uuid = uniqueId();
            if (classList) {
                const style = document.createElement('style');
                style.innerHTML = classList;
                style.setAttribute('id', uuid);
                document.head.appendChild(style);
            }

            emitter && emitter.emit('component-appended', currentVariable.$id);
            return () => {
                const styleElement = document.getElementById(uuid);
                styleElement && document.head.removeChild(styleElement);
                emitter && emitter.emit('component-removed', currentVariable.$id);
            };
        }, [emitter]);

        const componentIdRef = useRef({});
        componentIdRef.current = $taskId;
        useEffect(() => {
            if (otherContext.renderProps.rootIsMount && componentIdRef.current) {
                otherContext.renderProps.renderEvent.emit('complete-render-task', componentIdRef.current);
            }
        }, [otherContext.renderProps.renderEvent, otherContext.renderProps.rootIsMount]);

        const inner = (() => {
            if (Object.keys(extract).length > 0) {
                return <Provider
                    value={Object.assign({}, otherContext, {functions, components, variable: currentVariable})}>
                    <WrappedComponent {...newProps} className={classnames(newProps.className, `id_${currentVariable.$id}`)}/>
                </Provider>;
            }
            return <WrappedComponent {...newProps} className={classnames(newProps.className, `id_${currentVariable.$id}`)}/>;
        })();

        if (_debug === true) {
            return <Debug data={{
                context: Object.assign({}, otherContext, {functions, components, variable: currentVariable}),
                props: newProps
            }}>{inner}</Debug>
        }
        return inner;
    };
    return ApplyVariable;
};
