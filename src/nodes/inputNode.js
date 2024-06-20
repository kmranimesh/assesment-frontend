// /frontend/src/nodes/InputNode.js
import React from 'react';
import AbstractNode from './AbstractNode';

const InputNode = (props) => {
  return (
    <AbstractNode 
      type="input" 
      content={<div>Input Content</div>} 
      handles={[{type: 'input', id: 'handle1'}, {type: 'output', id: 'handle2'}]}
      onChange={props.onChange}
    />
  );
};

export default InputNode;
