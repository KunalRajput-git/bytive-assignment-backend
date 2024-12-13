const TaskService = require("../services/taskService");

const taskService = new TaskService();

// Helper method to send success responses
function sendSuccessResponse(res, statusCode, message, data) {
    return res.status(statusCode).json({
        success: true,
        message: message,
        data: data || null,
        error: null
    });
}

// Helper method to handle errors
function handleError(res, error, message = "Something went wrong, please try again!") {
    console.error(error);
    return res.status(500).json({
        success: false,
        message: message,
        error: error.message || error
    });
}

// Create a new task
async function create(req, res) {
    const { title, description } = req.body;
    const task = { title, description };
    try {
        const newTask = await taskService.createTask(task);
        return sendSuccessResponse(res, 201, "Task added successfully!", newTask);
    } catch (error) {
        return handleError(res, error, "Error adding task. Please try again.");
    }
}

// Get all tasks
async function read(req, res) {
    try {
        const tasks = await taskService.getTasks();
        return sendSuccessResponse(res, 200, "Tasks fetched successfully!", tasks);
    } catch (error) {
        return handleError(res, error, "Error fetching tasks. Please try again.");
    }
}

// Get a task by ID
async function readById(req, res) {
    const { id } = req.params;
    try {
        const task = await taskService.getTaskById(id);
        return sendSuccessResponse(res, 200, "Task fetched successfully!", task);
    } catch (error) {
        return handleError(res, error, `Task not found with ID: ${id}`);
    }
}

// Update a task's status
async function update(req, res) {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const task = await taskService.updateTask(id, status);
        return sendSuccessResponse(res, 200, "Task updated successfully!", task);
    } catch (error) {
        return handleError(res, error, `Error updating task with ID: ${id}`);
    }
}

// Delete a task
async function deleteTask(req, res) {
    const { id } = req.params;
    console.log(id);

    try {
        const task = await taskService.deleteTask(id);
        return sendSuccessResponse(res, 200, "Task deleted successfully!", task);
    } catch (error) {
        return handleError(res, error, `Error deleting task with ID: ${id}`);
    }
}

module.exports = {
    create,
    read,
    readById,
    update,
    deleteTask
};
