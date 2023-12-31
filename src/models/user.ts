import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema({
    username : {type : String, required : true},
    email : {type : String, required : true, select : false},
    password : {type : String, required : true, select : false},
})


type User = InferSchemaType<typeof userSchema>;

const UserModel =  model<User>("User", userSchema);
export default UserModel