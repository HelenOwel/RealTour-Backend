// import mongoose from 'mongoose'


// const FormSchema = new mongoose.Schema({
//   Adult: { type: Number, required: true },
//   Child: { type: Number, required: true },
//   Date: { type: Date, required: true },
//   Checkin: { type: String, required: true },
// });

// const Form = mongoose.model('Form', FormSchema);

// export default Form;






 const Schema = mongoose.Schema
 import mongoose from 'mongoose'

 const formSchema = new Schema({
CheckIn:{
    type:String,
    required:true,
},
CheckOut:{
     type:String,
    required:true,    
  },
 Adult:{
    type:Number,
    required:true,
  },
  Child:{
    type:Number,
    required:true,
  }
 })

 const Form = mongoose.model('Form', formSchema);
 export default Form;



// models/User.mjs
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


