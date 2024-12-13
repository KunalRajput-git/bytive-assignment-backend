# To-Do API

This project is a RESTful API for managing tasks in a to-do application. The API allows users to create, retrieve, update, and delete tasks. Built with Node.js, Express, and MongoDB, it demonstrates a layered architecture using services, controllers, and repositories for maintainability and scalability.

## Features

- **Create Tasks**: Add new tasks with a title and description.
- **Read Tasks**: Retrieve all tasks or a specific task by ID.
- **Update Tasks**: Update the status of a task (e.g., `pending`, `in-progress`, `completed`).
- **Delete Tasks**: Remove tasks by ID.
- **Database Integration**: MongoDB is used for task persistence.

## Technologies Used

- **Node.js**: Runtime environment.
- **Express**: Web framework for building the API.
- **MongoDB**: Database for storing tasks.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **CORS**: Middleware to handle cross-origin requests.

## Installation and Setup

### Prerequisites
- Node.js installed on your machine.
- MongoDB instance running locally or accessible remotely.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/KunalRajput-git/bytive-assignment-backend
   cd bytive-assignment-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=4000
   MONGODB_CONNECTION_URI=mongodb+srv://yourusername:yourpassword@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. The server will run at `http://localhost:4000`.

## API Endpoints

### Base URL
```
http://localhost:4000/todos
```

### Endpoints

| Method | Endpoint       | Description                |
|--------|----------------|----------------------------|
| POST   | `/`            | Create a new task          |
| GET    | `/`            | Get all tasks              |
| GET    | `/:id`         | Get a specific task by ID  |
| PUT    | `/:id`         | Update a task by ID        |
| DELETE | `/:id`         | Delete a task by ID        |

### Request/Response Examples

#### Create a Task
- **Request**:
  ```json
  POST /todos
  {
    "title": "Buy groceries",
    "description": "Milk, Bread, Eggs",
    "status":"pending"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Task added successfully!",
    "data": {
      "_id": "64f4d2cba9e8e12cd4ab1234",
      "title": "Buy groceries",
      "description": "Milk, Bread, Eggs",
      "status": "pending",
      "createdAt": "2024-12-01T10:00:00Z",
      "updatedAt": "2024-12-01T10:00:00Z"
    }
  }
  ```

#### Get All Tasks
- **Request**:
  ```json
  GET /todos
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Tasks fetched successfully!",
    "data": [
      {
        "_id": "64f4d2cba9e8e12cd4ab1234",
        "title": "Buy groceries",
        "description": "Milk, Bread, Eggs",
        "status": "pending",
        "createdAt": "2024-12-01T10:00:00Z",
        "updatedAt": "2024-12-01T10:00:00Z"
      }
    ]
  }
  ```

#### Update a Task
- **Request**:
  ```json
  PUT /todos/64f4d2cba9e8e12cd4ab1234
  {
    "status": "completed"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Task updated successfully!",
    "data": {
      "_id": "64f4d2cba9e8e12cd4ab1234",
      "title": "Buy groceries",
      "description": "Milk, Bread, Eggs",
      "status": "completed",
      "createdAt": "2024-12-01T10:00:00Z",
      "updatedAt": "2024-12-01T12:00:00Z"
    }
  }
  ```

#### Delete a Task
- **Request**:
  ```json
  DELETE /todos/64f4d2cba9e8e12cd4ab1234
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Task deleted successfully!",
    "data": null
  }
  ```

## Folder Structure

```
.
├── src
│   ├── controllers
│   │   └── taskController.js
│   ├── db
│   │   └── database.js
│   ├── models
│   │   └── Task.js
│   ├── repositories
│   │   └── taskRepository.js
│   ├── routes
│   │   └── taskRoutes.js
│   ├── services
│   │   └── taskService.js
│   ├── constants.js
├── .env
├── app.js
├── package.json
├── package-lock.json
├── node_modules
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.
