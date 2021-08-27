import React from 'react';
import { useGlobalContext } from '../../context';
import { applyVariable } from '../../util';

const Img = ({ onLoad, ...props }) => {
  const { emitter } = useGlobalContext();
  return <img {...props} onLoad={(...args) => {
    onLoad && onLoad(...args);
    emitter && emitter.emit('relocation');
  }}/>;
};

export default applyVariable(Img);