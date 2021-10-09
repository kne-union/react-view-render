import React, {useState} from 'react';
import Context from '../Context';
import {applyVariable} from '../../util';
import classnames from 'classnames';

const State = ({initValue, setStateName, shadowDom, children, className, ...props}) => {
    const [state, setState] = useState(initValue);
    const $setState = setStateName ? (setStateName.indexOf('$') === 0 ? setStateName : '$' + setStateName) : '$setState';
    const inner = <Context variable={{$item: state}} functions={{[$setState]: setState}}>{children}</Context>;
    return shadowDom ? inner : <div {...props} className={classnames(className, 'view-render-state')}>
        {inner}
    </div>;
};

export default applyVariable(State);