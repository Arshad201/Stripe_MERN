const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const router = require('./route');
const cors = require('cors');
const connectToDB = require('./db');

connectToDB();


app.use(cors({origin: 'http://localhost:5173', credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', router); 

// module.exports = app;
// module.exports = instance
module.exports = {app}
 
