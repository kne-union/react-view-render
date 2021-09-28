import React, {useMemo} from 'react';
import Context from "../Context";
import {applyVariable} from '../../util';
import classname from 'classnames';

const Component = ({className, content, children, propsMap = {}, functionsMap, ...props}) => {
    const others = {}, funcs = {};
    Object.keys(propsMap).forEach((key) => {
        if (/^\$/.test(key)) {
            others[key] = props[propsMap[key]];
        }
    });
    Object.keys(functionsMap).forEach((key) => {
        if (/^\$/.test(key)) {
            funcs[key] = props[functionsMap[key]];
        }
    });
    return <div className={classname('view-render-component', className)}><Context
        variable={{...others, $props: props, $children: children}} functions={...funcs}>{content}</Context>
    </div>;
};

export default applyVariable(Component);