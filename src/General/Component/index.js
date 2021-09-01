import React from 'react';
import Context from "../../Logic/Context";
import {applyVariable} from '../../util';

const Component = ({content, children, ...props}) => {
    return <div><Context variable={{$props: props, $children: children}}>{content}</Context></div>;
};

export default applyVariable(Component);