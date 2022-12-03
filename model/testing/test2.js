const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Test2 = new Schema({
    email: String,
    password: {
      type: String,
   
    },
  
  
  });
  const Test2schema = mongoose.model("Test2", Test2);
module.exports = Test2schema;
  