import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './styles/styles.css'; 
import CustomNode1 from './nodes/custom/CustomNode1.js';
import CustomNode2 from './nodes/custom/CustomNode2.js';
import CustomNode3 from './nodes/custom/CustomNode3.js';
import CustomNode4 from './nodes/custom/CustomNode4.js';
import CustomNode5 from './nodes/custom/CustomNode5.js';

import CustomNode1 from './nodes/custom/CustomNode1.js';
import CustomNode2 from './nodes/custom/CustomNode2.js';
import CustomNode3 from './nodes/custom/CustomNode3.js';
import CustomNode4 from './nodes/custom/CustomNode4.js';
import CustomNode5 from './nodes/custom/CustomNode5.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const nodes = [
  { id: '1', type: 'customNode1', data: { value: 'example' }, position: { x: 0, y: 0 } },
  { id: '2', type: 'customNode2', data: { text: 'example' }, position: { x: 200, y: 0 } },
  { id: '3', type: 'customNode3', data: { checked: true }, position: { x: 400, y: 0 } },
  { id: '4', type: 'customNode4', data: { number: 5 }, position: { x: 600, y: 0 } },
  { id: '5', type: 'customNode5', data: { selectedOption: 'option1' }, position: { x: 800, y: 0 } }
];