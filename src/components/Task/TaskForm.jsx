
import React, { useState } from 'react';
import './TaskForm.scss';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;
