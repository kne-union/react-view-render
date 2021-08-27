import React from 'react';
import { applyVariable } from '../../util';

const Text = ({ content, ...props }) => {
  return (
    <span {...props}>
      {content}
    </span>
  );
};

Text.defaultProps = {
  content: '请输入内容'
};

export default applyVariable(Text);