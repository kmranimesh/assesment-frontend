// /frontend/src/nodes/OutputNode.js
import React from 'react';
import AbstractNode from './AbstractNode';

const OutputNode = (props) => {
  return (
    <AbstractNode 
      type="output" 
      content={<div>Output Content</div>} 
      handles={[{type: 'input', id: 'handle1'}, {type: 'output', id: 'handle2'}]}
      onChange={props.onChange}
    />
  );
};

export default OutputNode;
