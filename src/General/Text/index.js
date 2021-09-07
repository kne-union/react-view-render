import React from 'react';
import { applyVariable } from '../../util';

const Text = ({ content, ...props }) => {
  return (
    <span {...props}>
      {content}
    </span>
  );
};

export default applyVariable(Text);