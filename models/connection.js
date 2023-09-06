require('dotenv').config();
const mongoose = require('mongoose');

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function
const MONGO_URI = process.env.MONGO_URI;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Establish Connection
mongoose.connect(MONGO_URI, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection
    .on('open', () => console.log('Connected to Mongo'))
    .on('close', () => console.log('Disconnected from Mongoose'))
    .on('error', error => console.log(error));

module.exports = mongoose;