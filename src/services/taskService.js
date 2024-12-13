const TaskRepository = require("../repositories/taskRepository");

class TaskService {
    constructor() {
        this.taskRepository = new TaskRepository();
    }

    // Helper method for error handling and logging
    handleError(method, error) {
        console.error(`${method} failed:`, error);
        throw new Error(`${method} failed: ${error.message || error}`);
    }

    // Fetch all tasks
    async getTasks() {
        try {
            return await this.taskRepository.getAll();
        } catch (error) {
            this.handleError('getTasks', error);
        }
    }

    // Create a new task
    async createTask(task) {
        try {
            return await this.taskRepository.saveTask(task); // Returns created task
        } catch (error) {
            this.handleError('createTask', error);
        }
    }

    // Get a task by its ID
    async getTaskById(id) {
        try {
            return await this.taskRepository.getById(id);
        } catch (error) {
            this.handleError('getTaskById', error);
        }
    }

    // Update a task's status
    async updateTask(id, status) {
        try {
            return await this.taskRepository.update(id, status); // Returns updated task
        } catch (error) {
            this.handleError('updateTask', error);
        }
    }

    // Delete a task
    async deleteTask(id) {
        try {
            return await this.taskRepository.delete(id); // Returns deleted task
        } catch (error) {
            this.handleError('deleteTask', error);
        }
    }
}

module.exports = TaskService;
