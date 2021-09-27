import React from 'react';
import Context from '../Context';
import {applyVariable} from '../../util';
import classnames from 'classnames';

const Rename = ({resource, name, target = 'variable', children, className, ...props}) => {
    const output = {['$' + name]: resource};
    return <div {...props} className={classnames(className, 'view-render-rename')}>
        <Context {...{[target]: output}}>{children}</Context>
    </div>;
};

export default applyVariable(Rename);