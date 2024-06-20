// /frontend/src/nodes/TextNode.js
import React, { useState, useEffect } from 'react';
import AbstractNode from './AbstractNode';
import { Handle, Position } from 'reactflow';

const TextNode = ({ id, data }) => {
  const [text, setText] = useState('');
  const [handles, setHandles] = useState([{type: 'input', id: 'handle1'}, {type: 'output', id: 'handle2'}]);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    const regex = /{{(.*?)}}/g;
    const newHandles = [...handles];
    let match;
    while ((match = regex.exec(newText)) !== null) {
      newHandles.push({ type: 'variable', id: match[1] });
    }
    setHandles(newHandles);
  };

  return (
    <AbstractNode 
      id={id} 
      type="text" 
      content={<textarea value={text} onChange={handleChange} />}
      handles={handles}
    />
  );
};

export default TextNode; // Ensure TextNode is the default export
