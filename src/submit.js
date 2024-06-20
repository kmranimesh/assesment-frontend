// /frontend/src/submit.js
import React from 'react';

const submitPipeline = async (nodes, edges) => {
  const response = await fetch('/pipelines/parse', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nodes, edges }),
  });
  const data = await response.json();
  alert(`Nodes: ${data.num_nodes}, Edges: ${data.num_edges}, Is DAG: ${data.is_dag}`);
};

const SubmitButton = ({ nodes, edges }) => {
  return (
    <button onClick={() => submitPipeline(nodes, edges)}>
      Submit
    </button>
  );
};

export default SubmitButton; // Ensure SubmitButton is the default export
