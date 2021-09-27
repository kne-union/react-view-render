import React, {useMemo} from 'react';
import Context from "../Context";
import {applyVariable} from '../../util';
import classname from 'classnames';

const Component = ({className, content, children, propsMap = {}, ...props}) => {
    const others = {};
    Object.keys(propsMap).forEach((key) => {
        if (/^\$/.test(key)) {
            others[key] = props[propsMap[key]];
        }
    });
    return <div className={classname('view-render-component', className)}><Context
        variable={{...others, $props: props, $children: children}}>{content}</Context>
    </div>;
};

export default applyVariable(Component);