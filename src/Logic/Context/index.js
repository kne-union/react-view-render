import React from 'react';
import { Provider, useGlobalContext } from '../../context';
import { applyVariable } from '../../util';

const Context = ({ children, functions, variable }) => {
  const { variable: contextVariable, functions: contextFunctions, ...otherContext } = useGlobalContext();
  const currentVariable = Object.assign({}, contextVariable, variable);
  const currentFunctions = Object.assign({}, contextFunctions, functions);
  return <Provider value={Object.assign({}, otherContext, { variable: currentVariable, functions: currentFunctions })}>
    {children}
  </Provider>;
};

export default applyVariable(Context);