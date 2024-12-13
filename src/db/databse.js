const mongoose = require('mongoose');
const { MONGODB_CONNECTION_URI } = require('../constants');

const connectToDb = async () => {
    mongoose.connect(MONGODB_CONNECTION_URI).then(() => {
        console.log("Successfully connected to MongoDB Atlas");
    }).catch(err => {
        console.error("Error connecting to MongoDB Atlas:", err);
    });
}

module.exports = { connectToDb }


