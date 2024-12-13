const Task = require('../models/Task');

class TaskRepository {

    // Helper method to handle error logging
    handleError(operation, error) {
        console.error(`${operation} failed:`, error);
        throw new Error(`Error occurred in ${operation}: ${error.message || error}`);
    }

    // Helper method to find a task by ID
    async findTaskById(id) {
        try {
            const task = await Task.findById(id);
            if (!task) throw new Error("Task not found or invalid taskId!");
            return task;
        } catch (error) {
            this.handleError('findTaskById', error);
        }
    }

    // Get all tasks
    async getAll() {
        try {
            const tasks = await Task.find();
            return tasks;
        } catch (error) {
            this.handleError('getAll', error);
        }
    }

    // Save a new task
    async saveTask(taskData) {
        try {
            const newTask = new Task(taskData);
            await newTask.save();
            return newTask; // Returning the newly saved task
        } catch (error) {
            this.handleError('saveTask', error);
        }
    }

    // Get a task by ID
    async getById(id) {
        try {
            return await this.findTaskById(id);
        } catch (error) {
            this.handleError('getById', error);
        }
    }

    // Update a task's status
    async update(id, status) {
        try {
            const task = await this.findTaskById(id);
            task.status = status;
            await task.save();
            return task; // Returning updated task
        } catch (error) {
            this.handleError('update', error);
        }
    }

    // Delete a task
    async delete(id) {
        try {
            const task = await this.findTaskById(id);
            await Task.findByIdAndDelete(id);
            return task; // Returning the deleted task
        } catch (error) {
            this.handleError('delete', error);
        }
    }
}

module.exports = TaskRepository;
