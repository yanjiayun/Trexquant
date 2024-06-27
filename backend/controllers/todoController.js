const TodoList = require('../models/TodoList');

// Create a new to-do list
const createTodoList = async (req, res) => {
  const { name } = req.body;
  
  try {
    const newTodoList = new TodoList({ name, todos: [] });
    const savedTodoList = await newTodoList.save();
    res.status(201).json(savedTodoList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all to-do lists
const getTodoLists = async (req, res) => {
  try {
    const todoLists = await TodoList.find();
    res.json(todoLists);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a to-do list by id
const getTodoListById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const todoList = await TodoList.findById(id);
    if (!todoList) {
      return res.status(404).json({ message: 'To-do list not found' });
    }
    res.json(todoList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add a task to a to-do list
const addTask = async (req, res) => {
  const { id } = req.params;
  const { taskName } = req.body;
  
  try {
    const todoList = await TodoList.findById(id);
    if (!todoList) {
      return res.status(404).json({ message: 'To-do list not found' });
    }
    
    todoList.todos.push({ name: taskName, completed: false });
    await todoList.save();
    res.json(todoList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Toggle task completion
const toggleTaskCompletion = async (req, res) => {
  const { id, taskId } = req.params;
  
  try {
    const todoList = await TodoList.findById(id);
    if (!todoList) {
      return res.status(404).json({ message: 'To-do list not found' });
    }
    
    const task = todoList.todos.id(taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    task.completed = !task.completed;
    await todoList.save();
    res.json(todoList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Delete a to-do list
const deleteTodoList = async (req, res) => {
  const { id } = req.params;

  try {
    const todoList = await TodoList.findByIdAndDelete(id);
    if (!todoList) {
      return res.status(404).json({ message: 'To-do list not found' });
    }

    res.json({ message: 'To-do list deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createTodoList,
  getTodoLists,
  getTodoListById,
  addTask,
  toggleTaskCompletion,
  deleteTodoList
};