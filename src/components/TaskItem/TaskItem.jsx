import React from 'react';

const TaskItem = ({ task, toggleComplete, removeTask }) => {
  return (
    <div
      className={`task-item ${task.completed ? 'completed' : ''}`}
      onClick={() => toggleComplete(task.id)}
    >
      <span>{task.text}</span>
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          removeTask(task.id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
};

export default TaskItem;
