const express = require("express");
const cors = require("cors");
const taskRouter = require("./src/routes/taskRoutes");
const { PORT } = require("./src/constants");
const { connectToDb } = require("./src/db/databse");

// Set up environment-specific configurations
const LISTENING_PORT = process.env.PORT || PORT;

// Create an instance of the Express app
const app = express();

// Middleware: Set up body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware: Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Route configuration: Assign taskRouter to handle requests under "/todos" path
app.use('/todos', taskRouter);

// Database connection: Establish a connection to the database
connectToDb()

// Start the server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${LISTENING_PORT}`);
});
