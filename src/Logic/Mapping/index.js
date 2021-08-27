import React from 'react';
import Context from '../Context';
import { applyVariable } from '../../util';
import classnames from 'classnames';

const Mapping = ({ resource, expression, children, className, ...props }) => {
  const item = typeof expression === 'function' ? expression(resource) : null;
  return <div {...props} className={classnames(className, 'view-render-mapping')}>
    <Context variable={{ $item: item }}>{children}</Context>
  </div>;
};

export default applyVariable(Mapping);