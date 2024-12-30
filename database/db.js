const mongoose = require('mongoose');
require('dotenv').config();


const mongoURI = process.env.MONGO_URL_LOCAL;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected',  () => {
    console.log("Connected to MongoDB server");
});

db.on('error', error => {
    console.error("Error connecting to MongoDB server", error);
});

db.on('disconnected',  () => {
    console.log("Disconnected from MongoDB server");
});


module.exports = db;