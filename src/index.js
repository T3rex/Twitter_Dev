const express = require('express');
const connect = require('./config/database');
const apiRouter = require('./routes/index');
const bodyParser = require('body-parser');
const app = express();

const {LikeService} = require('./services/index');
const {UserRepository} = require('./repository/index');

const userRepo = new UserRepository();
const likeService = new LikeService();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api',apiRouter);


app.listen(3001,async() => {
    console.log("Server started" );
    await connect();
    console.log('Mongo db connected');    

})