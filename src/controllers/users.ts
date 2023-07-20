import { RequestHandler } from "express"
import bcrypt from 'bcrypt';
import UserModel from "../models/user";


 
 export const signUp : RequestHandler = async (req, res, next) => {
    const {username, email, password} = req.body;
    const saltRound = 10;
try {
   

    if(!username || !email || !password){
       return  res.json({message : "Parameters missing"})
    }
    const existingUserName = await UserModel.findOne({username}).exec();
    if(existingUserName){
         return res.json({message : "already user name exist"})
    }
    const existingEmail = await UserModel.findOne({email}).exec();
    if(existingEmail){
       return  res.json({message : "already email exist"})
    }

    const passwordHashed = await bcrypt.hash(password, saltRound);
  
    const newUser = await UserModel.create({
        username : username,
        email : email,
        password : passwordHashed
    })

   return  res.json({
        message : "user create successfully",
        data : newUser
    })
} catch (error) {
    console.log(error);
   return  res.send("server error")
}

 }

 