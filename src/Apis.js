const express=require("express");
const app=express();
const crea=require("./Createuser")
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const middelWare=(req,res,next)=>{
   console.log(req.headers.authorization);
//    if(req.headers.authorization){
//     next();
//    }
//    else
//    res.send("error");
    next()
}
const api=(app)=>{
    app.use(middelWare)
app.post("/auth/create/user",crea.createUser);
app.post("/auth/login/user",crea.loginUser);
app.post("/userdata/insertDataInDb",crea.insertDataInDb);
app.post("/user/tasks",crea.getTasks);
app.post("/user/updateflag",crea.updateTaskFlag);
app.post("/user/removeflag",crea.removeFlag);
app.post("/usertask/remove",crea.taskRemove);
app.post("/taskedit",crea.taskEdit);
}
module.exports={api}