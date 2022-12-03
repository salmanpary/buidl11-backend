const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const Basket = new Schema({
    allocation: {
        type: [String],
      },
      
    email:String,
    approved:{
        type:String,default:"false"
    },
    coins: {
        type: [String],
      },
   min_amount:Number,
   commission:Number,
    description:String,
    title:String,

    marketing_tagline:String,
});



const UserSchema = mongoose.model("Basket", Basket);
module.exports = UserSchema;
