// /frontend/src/nodes/CustomNode.js
import React from 'react';
import AbstractNode from './AbstractNode';

const CustomNode = (props) => {
  return (
    <AbstractNode 
      type="custom" 
      content={<div>Custom Content</div>} 
      handles={[{type: 'input', id: 'handle1'}, {type: 'output', id: 'handle2'}]}
      onChange={props.onChange}
    />
  );
};

export default CustomNode;
