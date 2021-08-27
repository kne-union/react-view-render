import React from 'react';
import classnames from 'classnames';
import { applyVariable } from '../../util';

const Div = ({ className, ...props }) => {
  return <div {...props} className={classnames(className, 'view-render-div')}/>;
};

export default applyVariable(Div);