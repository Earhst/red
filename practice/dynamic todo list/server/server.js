// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Task = require('./Task');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/dynamic_todo_list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.get('/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Get all tasks grouped by day
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    const grouped = {};

    for (const day of ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']) {
      grouped[day] = tasks.filter(task => task.day === day);
    }

    res.json(grouped);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Add a task to a specific day
app.post('/tasks', async (req, res) => {
  try {
    const { text, day } = req.body;
    const newTask = new Task({ text, day });
    const saved = await newTask.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add task' });
  }
});

// Delete task
app.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
