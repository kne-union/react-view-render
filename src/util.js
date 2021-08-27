import React, { useEffect } from 'react';
import { useGlobalContext, Provider } from './context';
import get from 'lodash/get';

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
    const { variable, functions, ...otherContext } = useGlobalContext();
    const { emitter } = otherContext;
    const { props, extract } = extractProps(originProps);
    const newProps = {}, currentVariable = Object.assign({}, variable, extract);
    Object.keys(props).forEach((key) => {
      const propsValue = props[key], parsedPropsValue = parseVariable(props[key]);

      if (currentVariable.hasOwnProperty(propsValue)) {
        newProps[key] = currentVariable[propsValue];
        return;
      }

      if (currentVariable.hasOwnProperty(parsedPropsValue.name)) {
        newProps[key] = get(currentVariable[parsedPropsValue.name], parsedPropsValue.path);
        return;
      }

      if (functions.hasOwnProperty(propsValue)) {
        if (typeof functions[propsValue] === 'string') {
          newProps[key] = (...args) => {
            const newFunction = new Function('args', 'variable', 'functions', 'lib', functions[propsValue]);
            return newFunction(args, currentVariable, functions, otherContext.lib);
          };
          return;
        }
        if (typeof functions[propsValue] === 'function') {
          newProps[key] = functions[propsValue];
          return;
        }
        return;
      }

      newProps[key] = escape(propsValue);
    });
    useEffect(() => {
      emitter && emitter.emit('component-appended', currentVariable.$id);
      return () => {
        emitter && emitter.emit('component-removed', currentVariable.$id);
      };
    }, [emitter]);
    if (Object.keys(extract).length > 0) {
      return <Provider
        value={Object.assign({}, otherContext, { functions, variable: currentVariable })}>
        <WrappedComponent {...newProps}/>
      </Provider>;
    }
    return <WrappedComponent {...newProps}/>;
  };
};