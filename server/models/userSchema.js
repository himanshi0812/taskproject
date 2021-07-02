const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true,
        trim: true,
        minlength:8,
        
    },
    cpassword : {
        type:String,
        required:true
    },
    address : {
        type:String,
        required:true
    }
})



userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
});


const User = mongoose.model('USERS',userSchema);

module.exports=User;