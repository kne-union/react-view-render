import React, { Children } from 'react';
import Context from '../Context';
import classnames from 'classnames';
import { applyVariable } from '../../util';

const List = ({ resource, map = (value) => value, children, className, ...props }) => {
  return <div {...props} className={classnames(className, 'view-render-list')}>{(resource || []).map((item, index) => {
    const props = map({ $item: item, $index: index });
    return Children.map(children, (item) => {
      if (!item) {
        return item;
      }
      return <Context variable={props}>{children}</Context>;
    });
  })}</div>;
};

export default applyVariable(List);