// /frontend/src/nodes/custom/CustomNode3.js
import React, { useState } from 'react';
import AbstractNode from '../AbstractNode';
import { Handle, Position } from 'reactflow'; // Ensure Position is imported

const CustomNode3 = ({ id, data }) => {
  const [checked, setChecked] = useState(data.checked || false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  const content = (
    <div>
      <label>
        Checked:
        <input 
          type="checkbox" 
          checked={checked} 
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
      type="custom3" 
      content={content} 
      handles={handles} 
    />
  );
};

export default CustomNode3; // Ensure CustomNode3 is the default export
