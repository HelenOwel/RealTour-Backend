import mongoose from 'mongoose'

 const Schema = mongoose.Schema

 const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },

   email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  }
 })

 const User = mongoose.model('User', userSchema);
 export default User;



// // models/User.mjs
// import mongoose from "mongoose";

// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// const User = mongoose.model("User", UserSchema);
// export default User;


