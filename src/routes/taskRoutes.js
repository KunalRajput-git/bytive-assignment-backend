const express = require('express');
const TaskController = require('../controllers/taskController');

const router = express.Router();

// Destructure controller methods directly from TaskController
const { create, read, readById, update, deleteTask } = TaskController;

// Define routes for tasks
router.post('/', create);          // POST /todos - Create a new task
router.get('/', read);             // GET /todos - Get all tasks
router.get('/:id', readById);      // GET /todos/:id - Get task by ID
router.put('/:id', update);        // PUT /todos/:id - Update task by ID
router.delete('/:id', deleteTask); // DELETE /todos/:id - Delete task by ID

module.exports = router;
