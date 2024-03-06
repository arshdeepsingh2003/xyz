//connection with mongodb
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1/newform")
.then(()=>{
    console.log("connected to mongodb");
})
.catch((error)=>{
    console.log("errorr initiated");
})