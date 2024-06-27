const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const todoListSchema = new Schema({
  name: { type: String, required: true },
  todos: [taskSchema]
});

const TodoList = mongoose.model('TodoList', todoListSchema);

module.exports = TodoList;