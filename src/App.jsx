import React, { useState, useEffect } from 'react';
import TaskForm from './components/Task/TaskForm';
import TaskList from './components/TaskList/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('/tasks.json');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error al cargar tareas:', error);
    }
  };

  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);

  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} removeTask={removeTask} />
    </div>
  );
};

export default App;
