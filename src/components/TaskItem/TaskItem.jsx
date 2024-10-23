import React from 'react';
import './TaskItem.scss'

const TaskItem = ({ task, toggleComplete, removeTask, startEditing }) => {
  return (
    <div
      className={`task-item ${task.completed ? 'completed' : ''}`}
      onClick={() => toggleComplete(task.id)}
    >
      <span>{task.text}</span>
      <div className="button-container">
        <button onClick={(e) => { e.stopPropagation(); startEditing(task); }}>
          Editar
        </button>
        <button onClick={(e) => { e.stopPropagation(); removeTask(task.id); }}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
