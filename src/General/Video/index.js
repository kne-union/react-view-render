import React from 'react';
import { applyVariable } from '../../util';

const Video = ({ ...props }) => {
    return <video {...props} />;
};

export default applyVariable(Video);
