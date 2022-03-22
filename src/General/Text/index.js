import React from 'react';
import TextEscape from '@kne/react-text-escape';
import {applyVariable} from '../../util';

const Text = ({content = '', ...props}) => {
    return (
        <TextEscape text={content} {...props} />
    );
};

export default applyVariable(Text);