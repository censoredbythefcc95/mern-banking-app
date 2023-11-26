const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

//DOTENV PORT configuration setup
dotenv.config();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Banking main server app is working.');
});

// Middleware for cors
app.get(cors());
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});