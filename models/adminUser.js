const mongoose = require("mongoose")

const AdminUserSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        email:true,
    },
    password:{
        type:String,
        minlength:5,
        maxlength:20,
    },
    status:{
        type:Boolean,
        default:true,
    }
})
const LoginModel = mongoose.model("tbl_adminuser",AdminUserSchema )
module.exports =LoginModel;