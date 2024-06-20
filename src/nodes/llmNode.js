// /frontend/src/nodes/LLMNode.js
import React from 'react';
import AbstractNode from './AbstractNode';

const LLMNode = (props) => {
  return (
    <AbstractNode 
      type="llm" 
      content={<div>LLM Content</div>} 
      handles={[{type: 'input', id: 'handle1'}, {type: 'output', id: 'handle2'}]}
      onChange={props.onChange}
    />
  );
};

export default LLMNode;
