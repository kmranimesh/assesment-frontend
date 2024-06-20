import React from 'react';
import AbstractNode from './AbstractNode';
import { Handle, Position } from 'reactflow';

const OutputNode = ({ id, data }) => {
  const content = (
    <div>
      <span>Output</span>
    </div>
  );

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-input` }
  ];

  return (
    <AbstractNode 
      id={id} 
      type="output" 
      content={content} 
      handles={handles} 
    />
  );
};

export default OutputNode; 
