const express = require("express");
const cors = require("cors");
const db = require('./db');
const { readdirSync } = require('fs')
const app = express();

//const routes=require('./routes')
require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');


const PORT = process.env.PORT;
//middlewares
app.use(cors());
app.use(express.json());
//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))
const server = () => {
    db();
    app.listen(PORT, () => {
        console.log('LISTENING TO PORT : ', PORT)
    })
}
server()