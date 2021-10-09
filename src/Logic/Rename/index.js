import React from 'react';
import Context from '../Context';
import {applyVariable} from '../../util';
import classnames from 'classnames';

const Rename = ({resource, name, shadowDom, target = 'variable', children, className, ...props}) => {
    const output = {['$' + name]: resource};
    const inner = <Context {...{[target]: output}}>{children}</Context>;
    return shadowDom ? inner : <div {...props} className={classnames(className, 'view-render-rename')}>
        {inner}
    </div>;
};

export default applyVariable(Rename);