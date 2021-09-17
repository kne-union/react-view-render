import React from 'react';
import Context from "../Context";
import {applyVariable} from '../../util';
import classname from 'classnames';

const Component = ({className, content, children, ...props}) => {
    return <div className={classname('view-render-component', className)}><Context
        variable={{$props: props, $children: children}}>{content}</Context>
    </div>;
};

export default applyVariable(Component);