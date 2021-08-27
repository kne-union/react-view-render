import React, { useState } from 'react';
import Context from '../Context';
import { applyVariable } from '../../util';
import classnames from 'classnames';

const State = ({ initValue, setStateName, children, className, ...props }) => {
  const [state, setState] = useState(initValue);
  const $setState = setStateName ? (setStateName.indexOf('$') === 0 ? setStateName : '$' + setStateName) : '$setState';
  return <div {...props} className={classnames(className, 'view-render-state')}>
    <Context variable={{ $item: state }}
             functions={{ [$setState]: setState }}>{children}</Context>
  </div>;
};

export default applyVariable(State);