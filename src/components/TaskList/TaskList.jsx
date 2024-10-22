import React from 'react';
import TaskItem from './../TaskItem/TaskItem';

const TaskList = ({ tasks, toggleComplete, removeTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
