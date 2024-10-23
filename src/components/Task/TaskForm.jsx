import React, { useState, useEffect } from 'react';
import './TaskForm.scss';

const TaskForm = ({ addTask, updateTask, editingTask }) => {
  const [task, setTask] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask.text);
    } else {
      setTask('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      if (editingTask) {
        updateTask(task);
      } else {
        addTask(task);
      }
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
      <button type="submit">{editingTask ? 'Actualizar Tarea' : 'Agregar Tarea'}</button>
    </form>
  );
};

export default TaskForm;
