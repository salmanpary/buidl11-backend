const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const Profile = new Schema({
  email: String,
  phone:String,
  api_key:String,
  api_secret:String,
  response:Object

});

// User.pre("save", async function (next) {
//   try {
//     let salt = await bcrypt.genSalt(12); // generate hash salt of 12 rounds
//     let hashedPassword = await bcrypt.hash(this.password, salt); // hash the current user's password
//     this.password = hashedPassword;
//   } catch (error) {
//     console.error(error);
//   }
//   return next();
// });
//s
// User.methods.comparePassword = async function (candidatePassword) {
//   try {
//     let isMatch = await bcrypt.compare(candidatePassword, this.password);
//     return isMatch;
//   } catch (error) {
//     console.error(error);
//   }
// };


// User.statics.findbyCredential=async(email,password)=>{
//     const user=await UserSchema.findOne({email})
//     if(!user){
//         throw new Error("unable to find email")
//     }
//     const ismatch=await bcrypt.compare(password,user.password)
//     if(!ismatch){
//         throw new Error("wrong password")
//     }
//     return user
//     }

const ProfileSchema = mongoose.model("Profile", Profile);
module.exports = ProfileSchema;
