// server/Task.js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['TO_DO', 'PLANNING', 'IN_PROGRESS', 'AT_RISK', 'UPDATE_REQUIRED', 'ON_HOLD'],
    default: 'TO_DO',
  },
});

module.exports = mongoose.model('Task', TaskSchema);
