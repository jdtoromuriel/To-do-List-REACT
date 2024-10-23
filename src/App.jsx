import React, { useState, useEffect } from 'react';
import TaskForm from './components/Task/TaskForm';
import TaskList from './components/TaskList/TaskList';
import './App.scss';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

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
    setTasks((prevTasks) => [...prevTasks, newTask]);
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
    localStorage.removeItem('tasks');
  };

  const startEditing = (task) => {
    setEditingTask(task);
  };

  const updateTask = (taskText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editingTask.id ? { ...task, text: taskText } : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask} updateTask={updateTask} editingTask={editingTask} />
      <TaskList 
        tasks={tasks} 
        toggleComplete={toggleComplete} 
        removeTask={removeTask} 
        startEditing={startEditing} 
      />
      <button className="clear-button" onClick={clearTasks}>Limpiar Tareas</button>
    </div>
  );
};

export default App;
