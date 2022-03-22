import React from 'react';
import Context from '../Context';
import {applyVariable} from '../../util';
import classnames from 'classnames';

const Mapping = ({resource, expression, shadowDom, children, className, ...props}) => {
    const item = typeof expression === 'function' ? expression(resource) : resource;
    const inner = <Context variable={{$item: item}}>{children}</Context>;
    return shadowDom ? inner : <div {...props} className={classnames(className, 'view-render-mapping')}>
        {inner}
    </div>;
};

export default applyVariable(Mapping);