import React from 'react';

const AbstractNode = ({ type, content, handles, onChange }) => {
  return (
    <div className={`node node-${type}`}>
      {handles.map(handle => (
        <div className={`handle handle-${handle.type}`} key={handle.id} />
      ))}
      <div className="content">
        {content}
      </div>
      <input type="text" onChange={onChange} />
    </div>
  );
};

export default AbstractNode;
