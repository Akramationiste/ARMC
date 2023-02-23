const express = require('express');
const bodyParser = require('body-parser');
const router = require("./Routes/auth");
const app = express();

const apiRouter = require('./Routes/api');
const authRouter = require('./Routes/auth');
const authMiddleware = require('./Middlewhare/authm');


app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());


// register auth routes
app.use('/auth', authRouter);

// use auth middleware for api routes
app.use('/api', authMiddleware, apiRouter);



app.listen(3000, () => console.log('Server started'));

const mongoose = require('mongoose');


// connect to mongodb
mongoose.connect('mongodb+srv://chanelhm50:iPqIxFQtJrkHRqkW@cluster0.q8id5cn.mongodb.net/?retryWrites=true&w=majority');


mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
}).on('error', function(error){
    console.log('Connection error:', error);
});

app.use(express.json());

// const apiRouter = require('./Routes/api');
app.use('/api', apiRouter);
app.use("/auth", router);
