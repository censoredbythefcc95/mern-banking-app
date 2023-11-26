//Configuration for Mongoose setup.
const mongoose = require('mongoose');
const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology; true.
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'There is a problem connecting to MongoDB.'));
db.once('open', () => {
    console.log('Successfully connected to MongoDB datbase.');
});

module.exports = db; 