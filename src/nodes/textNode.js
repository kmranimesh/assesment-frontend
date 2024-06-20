import React, { useState, useEffect } from 'react';
import AbstractNode from './AbstractNode';
import { Handle, Position } from 'reactflow';

const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data.text || '');
  const [handles, setHandles] = useState([{ type: 'input', id: 'handle1' }, { type: 'output', id: 'handle2' }]);
  const [size, setSize] = useState({ width: 200, height: 80 });

  useEffect(() => {
    const textLength = text.length;
    const width = Math.max(200, textLength * 8); // Adjust width based on text length
    const height = Math.max(80, Math.ceil(textLength / 20) * 20); // Adjust height based on text length
    setSize({ width, height });
  }, [text]);

  useEffect(() => {
    const regex = /{{(.*?)}}/g;
    let match;
    const newHandles = [{ type: 'input', id: 'handle1' }, { type: 'output', id: 'handle2' }];
    
    while ((match = regex.exec(text)) !== null) {
      newHandles.push({ type: 'variable', id: match[1] });
    }
    setHandles(newHandles);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const content = (
    <div>
      <textarea 
        value={text} 
        onChange={handleChange} 
        style={{ width: '100%', height: '100%' }} 
      />
    </div>
  );

  return (
    <div style={{ width: size.width, height: size.height }}>
      <AbstractNode 
        id={id} 
        type="text" 
        content={content} 
        handles={handles} 
      />
    </div>
  );
};

export default TextNode;
