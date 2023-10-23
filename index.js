const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const Model = require('./model/user');


require('dotenv').config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected')
})

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(3000, () => {
    console.log(`Server started at ${3000}`)
})