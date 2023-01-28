const mongoose = require("mongoose");
const validator = require("validator");
const adminSchema = new mongoose.Schema({
    fname : {
        type : String,
        required:true,
        trim:true
    },
    lname : {
        type : String,
        required:true,
        trim:true
    },
    email : {
        type : String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Not Valid Email")
            }
        }
    },
    address : {
        type:String,
        required:true,
        minlength:3
    },
    role : {
        type:String,
        required:true,
        
        enum : ['user','admin'],
        default:"admin",
    },
    profession : {
        type:String,
        required:true,
        minlength:6
    },
    password : {
        type:String,
        required:true,
        minlength:6
    },
    
})



const admin =  new mongoose.model("admin", adminSchema)
module.exports =admin;