import React from 'react';
import {applyVariable} from '../../util';

const Iframe = ({...props}) => {
    return <iframe {...props} />;
};

export default applyVariable(Iframe);