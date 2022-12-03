const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Test1 = new Schema({
    email: String,
    password: {
      type: String,
   
    },
  
  
  });
  const Test1schema = mongoose.model("Test1", Test1);
module.exports = Test1schema;
  