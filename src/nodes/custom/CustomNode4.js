// /frontend/src/nodes/custom/CustomNode4.js
import React, { useState } from 'react';
import AbstractNode from '../AbstractNode';
import { Handle, Position } from 'reactflow'; // Ensure Position is imported

const CustomNode4 = ({ id, data }) => {
  const [number, setNumber] = useState(data.number || 0);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const content = (
    <div>
      <label>
        Number:
        <input 
          type="number" 
          value={number} 
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
      type="custom4" 
      content={content} 
      handles={handles} 
    />
  );
};

export default CustomNode4; // Ensure CustomNode4 is the default export
