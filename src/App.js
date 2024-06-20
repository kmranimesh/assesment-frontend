// /frontend/src/App.js
import React, { useState } from 'react';
import SubmitButton from './submit';
import CustomNode1 from './nodes/custom/CustomNode1';
import CustomNode2 from './nodes/custom/CustomNode2';
import CustomNode3 from './nodes/custom/CustomNode3';
import CustomNode4 from './nodes/custom/CustomNode4';
import CustomNode5 from './nodes/custom/CustomNode5';
import { ReactFlowProvider } from 'reactflow';

const App = () => {
  const [nodes, setNodes] = useState([
    { id: '1', type: 'custom1', data: { value: 'example' }, position: { x: 0, y: 0 } },
    { id: '2', type: 'custom2', data: { text: 'example' }, position: { x: 200, y: 0 } },
    { id: '3', type: 'custom3', data: { checked: true }, position: { x: 400, y: 0 } },
    { id: '4', type: 'custom4', data: { number: 5 }, position: { x: 600, y: 0 } },
    { id: '5', type: 'custom5', data: { selectedOption: 'option1' }, position: { x: 800, y: 0 } }
  ]);

  const [edges, setEdges] = useState([]);

  return (
    <ReactFlowProvider>
      <div>
        {nodes.map(node => {
          switch(node.type) {
            case 'custom1':
              return <CustomNode1 key={node.id} id={node.id} data={node.data} />;
            case 'custom2':
              return <CustomNode2 key={node.id} id={node.id} data={node.data} />;
            case 'custom3':
              return <CustomNode3 key={node.id} id={node.id} data={node.data} />;
            case 'custom4':
              return <CustomNode4 key={node.id} id={node.id} data={node.data} />;
            case 'custom5':
              return <CustomNode5 key={node.id} id={node.id} data={node.data} />;
            default:
              return null;
          }
        })}
        <SubmitButton nodes={nodes} edges={edges} />
      </div>
    </ReactFlowProvider>
  );
};

export default App;
