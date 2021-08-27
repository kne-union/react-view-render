import React from 'react';
import { applyVariable } from '../util';
import compose from '@kne/compose';

const fieldDecorator = compose(applyVariable, (WrappedComponent) => {
  return ({ className, ...props }) => {
    return <WrappedComponent {...props} wrappedClassName={className}/>;
  };
});

export default fieldDecorator;