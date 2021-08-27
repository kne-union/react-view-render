import React from 'react';
import { Space } from 'antd';
import { applyVariable } from '../../util';
import classnames from 'classnames';

const SpaceOuter = ({ className, align, direction, size, wrap, split, children, ...props }) => {
  return <div {...props} className={classnames(className, 'view-render-space')}>
    <Space align={align} direction={direction} size={size} wrap={wrap} split={split}>{children}</Space>
  </div>;
};

export default applyVariable(SpaceOuter);