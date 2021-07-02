const express = require('express');
const router = express.Router();
require ('../db/conn');
const User = require('../models/userSchema');

router.get('/',(req,res) => {
    res.send('auth.js')
});

router.post('/signin',async (req,res) => {
    // console.log(req.body);
    // res.json({message:req.body});
    const { name, email, password, cpassword, address} = req.body;

    if( !name|| !email|| !password|| !cpassword|| !address){
        return res.status(420).json({error : 'please filled all field'});
    }

    try {

        const userExist = await User.findOne({ email: email});

        if(userExist){
            return res.status(422).json({error:"email already exist"});
        }

        const user = new User({  name, email, password, cpassword, address });

        const userRegister = await user.save();

        if(userRegister){
            res.status(201).json({ message : "register successfully"});
        } 

    } catch (err) {
        console.log(err);
    }
});   
module.exports = router;