const express = require('express');
const connect = require('./config/database');
const apiRouter = require('./routes/index');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const passport = require('passport');
const passportAuth = require('./config/jwt-middleware');
const app = express();

const {LikeService} = require('./services/index');
const {UserRepository} = require('./repository/index');

const userRepo = new UserRepository();
const likeService = new LikeService();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api',apiRouter);

app.use(passport.initialize());

app.listen(3001,async() => {
    console.log("Server started" );
    await connect();
    console.log('Mongo db connected');

    passportAuth(passport);
})