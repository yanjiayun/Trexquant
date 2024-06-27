const express = require('express');
const {
  createTodoList,
  getTodoLists,
  getTodoListById,
  addTask,
  toggleTaskCompletion,
  deleteTodoList
} = require('../controllers/todoController');

const router = express.Router();

router.post('/', createTodoList);
router.get('/', getTodoLists);
router.get('/:id', getTodoListById);
router.post('/:id/tasks', addTask);
router.patch('/:id/tasks/:taskId', toggleTaskCompletion);
router.delete('/:id', deleteTodoList);

module.exports = router;