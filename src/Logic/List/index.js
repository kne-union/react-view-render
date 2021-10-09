import React, {Children} from 'react';
import Context from '../Context';
import classnames from 'classnames';
import {applyVariable} from '../../util';

const List = ({resource, shadowDom, map = (value) => value, empty = null, children, className, ...props}) => {
    const inner = (resource || []).length === 0 ? empty : (resource || []).map((item, index) => {
        const props = map({$item: item, $index: index});
        return Children.map(children, (item) => {
            if (!item) {
                return item;
            }
            return <Context variable={props}>{children}</Context>;
        });
    });

    return shadowDom ? inner : <div {...props} className={classnames(className, 'view-render-list')}>
        {inner}
    </div>;
};

export default applyVariable(List);