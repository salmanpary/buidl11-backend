const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const Post = new Schema({
    description:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
      
   
});



const PostSchema = mongoose.model("Post", Post);
module.exports = PostSchema;
