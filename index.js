const express = require("express");
const app = express();
const path = require("path");;
const cors=require("cors");
const Binance=require('binance-api-node').default;
app.use(express.json());
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "config.env") });
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require("mongoose");

const UserSchema= require("./model/Test");
// const Binance = require('node-binance-api');
// const binance = new Binance().options({
//   "APIKEY": 'tkvR0fxbBD8LeJotggSdnp1nzxip2DmOqJLR3cFQ4aYASydgjEB5cZiLKKmPGbIY',
//   "APISECRET": 'DERLHx1KYhMNsyYOHwRrQ7rn60EBoeMRcOPYRqyE96fmnYjWvuAEQkRpFP67Ht0k'
// });
mongoose  
  .connect("mongodb+srv://salmanpary:salmanpary@cluster0.0unvdng.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  }).catch((e)=>{
    console.log("catch")
  });
const client = Binance()
// async function salman(){
//   const data = await client.prices();
//   return data
// }
// salman().then(data=>{console.log(data)}).catch((e)=>{console.log(e)})
app.use(cors())
app.use("/coindcx",require('./routes/coindcx'))
app.use("/getprice", require("./routes/getprice"));
app.use("/auth", require("./routes/auth"));
app.use("/test", require("./routes/testing/test"));
app.use('/',(req,res)=>{
  res.send("backend is up and running")
  })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening at ${PORT}`));
