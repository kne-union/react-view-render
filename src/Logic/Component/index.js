import React, {useMemo} from 'react';
import Context from "../Context";
import {applyVariable} from '../../util';
import classname from 'classnames';

const Component = ({className, shadowDom, content, children, propsMap = {}, functionsMap = {}, ...props}) => {
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

    const inner = <Context variable={{...others, $props: props, $children: children}}
                           functions={funcs}>{content}</Context>;

    return shadowDom ? inner : <div className={classname('view-render-component', className)}>
        {inner}
    </div>;
};

export default applyVariable(Component);