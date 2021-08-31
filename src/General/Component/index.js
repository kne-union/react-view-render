import React from 'react';
import {applyVariable} from '../../util';

const Component = ({content}) => {
    return <div>{content}</div>;
};

export default applyVariable(Component);