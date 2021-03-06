const express = require('express');
const router = express.Router();
require ('../db/conn');
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');

router.get('/',(req,res) => {
    res.send('auth.js')
});

router.post('/register',async (req,res) => {
    console.log(req.body);
    // res.json({message:req.body});
    const { name, email, password, cpassword, address} = req.body;

    if( !name|| !email|| !password|| !cpassword|| !address){
        return res.status(422).json({error : 'please filled all field'});
    }

    try {

        const userExist = await User.findOne({ email: email});

        if(userExist){
            return res.status(422).json({error:"email already exist"});
        }else if (password!= cpassword){
            return res.status(422).json ({error : "password not matched"})
        }else {

        const user = new User({  name, email, password, cpassword, address });
        
        await user.save();
        res.status(201).json({ message : "register successfully"});
        } 

    } catch (err) {
        console.log(err);
    }
});   

// login route
router.post('/signin',async (req,res) => {
    // console.log(req.body);
    // res.json({message:"aawwwww"});
    // let token;
    try{
    
        const {email, password } = req.body;
        
        if(!email || !password)
        {
            return res.json({error:"please fill the field"})
        }

        const userLogin = await User.findOne({email:email});
        // console.log(userLogin);
        if(userLogin){
        const isMatch = await bcrypt.compare(password , userLogin.password);

        const token = await userLogin.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken",token, {
            expires : new Date(Date.now() +25892000000),
            httpOnly: true

        })
        if(!isMatch){
            res.status(400).json({erro:"user error"})
        }else{
            res.json({message:"login success"})
        }}
        else{
            res.status(400).json({erro:"user error"})
        }
}
    catch (err){
        console.log(err);

    }
});

// home page
router.get('/home' , authenticate,(req,res) => {
    console.log('sdxvcb');
})
module.exports = router;