const mongoose=require("mongoose")
require("./employee_model")
mongoose.connect('mongodb://localhost:27017/employeeDB',{ useNewUrlParser: true , useUnifiedTopology: true,useFindAndModify:false },(err)=>
{
    if(!err)
    console.log("connection successfull")
    else
    console.log(err)
})