import React from 'react';
import {applyVariable} from '../../util';
import classnames from 'classnames';

const Condition = ({resource, shadowDom, expression, children, className, ...props}) => {
    const target = (() => {
        const flag = (() => {
            if (typeof expression === 'function') {
                return expression(resource);
            } else {
                return resource;
            }
        })();
        if (flag) {
            return children;
        }
        return null;
    })();

    return shadowDom ? target :
        <div {...props} className={classnames(className, 'view-render-condition')}>{target}</div>;
};

export default applyVariable(Condition);