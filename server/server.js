const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Task = require('./Task');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/dynamic_todo_list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    const grouped = {
      TO_DO: [],
      PLANNING: [],
      IN_PROGRESS: [],
      AT_RISK: [],
      UPDATE_REQUIRED: [],
      ON_HOLD: []
    };

    for (const task of tasks) {
      grouped[task.status].push(task);
    }

    res.json(grouped);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

app.post('/tasks', async (req, res) => {
  try {
    const { text, status } = req.body;
    const newTask = new Task({ text, status });
    const saved = await newTask.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

app.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
