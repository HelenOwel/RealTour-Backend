import mongoose from 'mongoose'

 const Schema = mongoose.Schema

 const newsSchema = new Schema({
   email:{
    type:String,
    required:true,
    unique:true,
  }
  
 })

 const NewsLetter = mongoose.model('NewsLetter', newsSchema);
 export default NewsLetter;



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


