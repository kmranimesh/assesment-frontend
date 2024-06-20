import React, { useState } from 'react';
import AbstractNode from '../AbstractNode';
import { Handle, Position } from 'reactflow'; 

const CustomNode1 = ({ id, data }) => {
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
      type="custom1" 
      content={content} 
      handles={handles} 
    />
  );
};

export default CustomNode1; 
