import React, {Children} from 'react';
import Context from '../Context';
import classnames from 'classnames';
import {applyVariable} from '../../util';

const List = ({resource, container, shadowDom, map = (value) => value, empty = null, children, className, ...props}) => {
    const inner = (resource || []).length === 0 ? empty : (resource || []).map((item, index) => {
        const props = map({$item: item, $index: index});
        return Children.map(children, (item) => {
            if (!item) {
                return item;
            }
            return <Context variable={props}>{children}</Context>;
        });
    });

    if (shadowDom) {
        return inner;
    }
    if (container) {
        return <container.type {...container.props} content={Object.assign({}, container.props.content, {
            variable: Object.assign({}, container.props.content.variable, {$children: inner})
        })}/>;
    }

    return <div {...props} className={classnames(className, 'view-render-list')}>
        {inner}
    </div>;
};

export default applyVariable(List);