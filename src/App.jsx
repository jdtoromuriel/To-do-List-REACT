import React, { useState, useEffect } from 'react';
import TaskForm from './components/Task/TaskForm';
import TaskList from './components/TaskList/TaskList';
import './App.scss';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} removeTask={removeTask} />
      <button className="clear-button" onClick={clearTasks}>Limpiar Tareas</button>
    </div>
  );
};

export default App;
