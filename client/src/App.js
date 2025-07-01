import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // Fetch tasks from backend
  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Failed to load tasks:", err));
  }, []);

  // Add a new task
  const handleAdd = () => {
    if (!input.trim()) return;

    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input })
    })
      .then(res => res.json())
      .then(newTask => {
        setTasks(prev => [...prev, newTask]);
        setInput('');
      })
      .catch(err => console.error("Failed to add task:", err));
  };

  // Delete a task by ID
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setTasks(prev => prev.filter(task => task._id !== id));
      })
      .catch(err => console.error("Failed to delete task:", err));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          style={{ marginRight: '0.5rem' }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul style={{ marginTop: '1rem' }}>
        {tasks.map(task => (
          <li key={task._id} style={{ marginBottom: '0.5rem' }}>
            {task.text}
            <button
              onClick={() => handleDelete(task._id)}
              style={{ marginLeft: '1rem' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
