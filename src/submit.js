// /frontend/src/submit.js
import React from 'react';
import './styles/submit.css';

const submitPipeline = async (nodes, edges) => {
  const payload = { nodes, edges };
  console.log("Submitting pipeline with payload:", payload); // Log payload to verify structure

  try {
    const response = await fetch('http://localhost:8000/pipelines/parse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    alert(`Nodes: ${data.num_nodes}, Edges: ${data.num_edges}, Is DAG: ${data.is_dag}`);
  } catch (error) {
    console.error("Error submitting pipeline:", error);
    alert("Failed to submit the pipeline. Please try again.");
  }
};

const SubmitButton = ({ nodes, edges }) => {
  return (
    <button className="submit-button" onClick={() => submitPipeline(nodes, edges)}>
      Submit
    </button>
  );
};

export default SubmitButton;
