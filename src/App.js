// App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import EditTaskForm from './EditTaskForm'; // Import the EditTaskForm component

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const addTask = (text) => {
    const newTask = {
      id: Math.random().toString(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (taskId) => {
    setEditingTaskId(taskId);
  };

  const saveTask = (editedTask) => {
    setTasks(tasks.map(task =>
      task.id === editedTask.id ? editedTask : task
    ));
    setEditingTaskId(null);
  };

  return (
    <div>
      <h1>Task Manager App</h1>
      {editingTaskId ? (
        <EditTaskForm 
          task={tasks.find(task => task.id === editingTaskId)} 
          onSave={saveTask} 
        />
      ) : (
        <TaskForm onAdd={addTask} />
      )}
      <TaskList 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleTask} 
        onEdit={editTask} 
      />
    </div>
  );
};

export default App;
