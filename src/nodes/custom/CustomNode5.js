// /frontend/src/nodes/custom/CustomNode5.js
import React, { useState } from 'react';
import AbstractNode from '../AbstractNode';
import { Handle, Position } from 'reactflow'; // Ensure Position is imported

const CustomNode5 = ({ id, data }) => {
  const [selectedOption, setSelectedOption] = useState(data.selectedOption || '');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const content = (
    <div>
      <label>
        Option:
        <select value={selectedOption} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </label>
    </div>
  );

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-value` }
  ];

  return (
    <AbstractNode 
      id={id} 
      type="custom5" 
      content={content} 
      handles={handles} 
    />
  );
};

export default CustomNode5; // Ensure CustomNode5 is the default export
