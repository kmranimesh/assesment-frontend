// /frontend/src/nodes/LLMNode.js
import React, { useState } from 'react';
import AbstractNode from './AbstractNode';
import { Handle, Position } from 'reactflow';

const LLMNode = ({ id, data }) => {
  const [value, setValue] = useState(data.value || '');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const content = (
    <div>
      <label>
        Value:
        <input 
          type="text" 
          value={value} 
          onChange={handleChange} 
        />
      </label>
    </div>
  );

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-value` }
  ];

  return (
    <AbstractNode 
      id={id} 
      type="llm" 
      content={content} 
      handles={handles} 
    />
  );
};

export default LLMNode; // Ensure LLMNode is the default export
