import React from 'react';
import './index.css';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="task">
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</h3>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
