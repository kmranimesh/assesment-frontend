// /frontend/src/nodes/custom/CustomNode2.js
import React, { useState } from 'react';
import AbstractNode from '../AbstractNode';

const CustomNode2 = ({ id, data }) => {
  const [text, setText] = useState(data.text || '');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const content = (
    <div>
      <label>
        Text:
        <textarea 
          value={text} 
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
      type="custom2" 
      content={content} 
      handles={handles} 
    />
  );
};

export default CustomNode2;
