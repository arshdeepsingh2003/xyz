const mongoose=require("mongoose");
const Schema=mongoose.Schema
const userSchema=new Schema({
    username: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
        unique:true
    }
});
const empcollection= new mongoose.model('collection',userSchema);
module.exports=empcollection;