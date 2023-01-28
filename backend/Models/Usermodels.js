const mongoose = require("mongoose");
const UserDataSchema = new mongoose.Schema({
    name : {
        type : String,
        required:true,
        trim:true
    },
    
    email : {
        type : String,
        required:true,
        unique:true,
        
    },
    address : {
        type:String,
        required:true,
        
    },
    profile_pic : {
        type:String,
        required:true,
        
    },

    
    
})



const user =  new mongoose.model("User", UserDataSchema)
module.exports =user;