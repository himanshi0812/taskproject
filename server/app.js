const dotenv = require("dotenv")
const express = require ('express');
const app = express();
const mongoose = require('mongoose');

dotenv.config({path:'./config.env'});
require('./db/conn');
// const User = require('./models/userSchema');

//convert json data to object
app.use(express.json());

//router file
app.use(require('./router/auth'));

// middleware
const middleware = (req,res,next) =>{
    console.log('middleware');
    // next();

}
middleware();

app.get('/home' , (req,res) => {
    res.cookie("test",'new');
    res.send ("hello i am server")
});

// app.get('/login' , (req,res) => {
//     res.send ("hello i am login")
// });

// app.get('/register',(req,res) => {
//     res.send ("hello i am register")
// });

app.listen(5000 ,() =>{ 
    console.log('server');
} )

