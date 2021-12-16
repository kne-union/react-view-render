import React from 'react';
import { TreeSelect } from '@kne/react-form-antd';
import fieldDecorator from '../fieldDecorator';

const _TreeSelect = ({...props}) => {
  return <TreeSelect {...props}/>
};

export default fieldDecorator(_TreeSelect);
