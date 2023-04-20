const express = require('express');
const connect = require('./config/database');
const Tweet = require('./models/tweets');
const apiRouter = require('./routes/index');
const bodyParser = require('body-parser');
const app = express();



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api',apiRouter);


app.listen(3001,async() => {
    console.log("Server started" );
    await connect();
    console.log('Mongo db connected');    
})