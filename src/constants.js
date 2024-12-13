const PORT = 4000;
require('dotenv').config();

const MONGODB_CONNECTION_URI = process.env.MONGODB_CONNECTION_URI;

module.exports = {
    MONGODB_CONNECTION_URI,
    PORT,
}