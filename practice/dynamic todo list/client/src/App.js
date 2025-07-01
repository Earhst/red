import React, { useState, useEffect } from 'react';

const daysOfWeek = [
  'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday', 'Sunday'
];

function App() {
  const [tasksByDay, setTasksByDay] = useState({});
  const [inputs, setInputs] = useState({});

  // Fetch tasks on load
  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(data => setTasksByDay(data))
      .catch(err => console.error('Failed to load tasks:', err));
  }, []);

  const handleInputChange = (day, value) => {
    setInputs(prev => ({ ...prev, [day]: value }));
  };

  const handleAddTask = (day) => {
    const text = inputs[day]?.trim();
    if (!text) return;

    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, day })
    })
      .then(res => res.json())
      .then(newTask => {
        setTasksByDay(prev => ({
          ...prev,
          [day]: [...(prev[day] || []), newTask]
        }));
        setInputs(prev => ({ ...prev, [day]: '' }));
      })
      .catch(err => console.error('Failed to add task:', err));
  };

  const handleDeleteTask = (day, id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setTasksByDay(prev => ({
          ...prev,
          [day]: prev[day].filter(task => task._id !== id)
        }));
      })
      .catch(err => console.error('Failed to delete task:', err));
  };

  return (
    <div>
      <h1>Weekly To-Do Board</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {daysOfWeek.map(day => (
          <div key={day} style={{ border: '1px solid #ccc', padding: '1rem', minWidth: '200px' }}>
            <h3>{day}</h3>
            <ul>
              {(tasksByDay[day] || []).map(task => (
                <li key={task._id}>
                  {task.text}
                  <button onClick={() => handleDeleteTask(day, task._id)}>x</button>
                </li>
              ))}
            </ul>
            <input
              type="text"
              value={inputs[day] || ''}
              onChange={(e) => handleInputChange(day, e.target.value)}
              placeholder={`Add task to ${day}`}
            />
            <button onClick={() => handleAddTask(day)}>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
