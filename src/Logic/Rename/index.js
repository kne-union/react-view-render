import React from 'react';
import Context from '../Context';
import {applyVariable} from '../../util';
import classnames from 'classnames';

const Rename = ({resource, name, children, className, ...props}) => {
    return <div {...props} className={classnames(className, 'view-render-rename')}>
        <Context variable={{[name]: resource}}>{children}</Context>
    </div>;
};

export default applyVariable(Rename);