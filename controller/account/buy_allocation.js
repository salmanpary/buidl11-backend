const Binance=require('binance-api-node').default;
const  dotenv=require('dotenv');
const path = require("path");
const UserSchema = require("../../model/user"); 
const { buy_btc } = require('./buy_btc');
dotenv.config({ path: path.join(__dirname, "config.env") });



module.exports.buy_allocation = async (req, res) => {

  const user=await UserSchema.findOne({name:req.body.name});
  // const client = Binance({
  //   apiKey: "aYzZOAeym4hX76k6jMogk7mhJNYnywZuAI6jl7Mii89DzrMAw4B6vv9NvU1aU9fu",
  //   apiSecret: "JmU2M67eYD9ZqBLMF8JH4R5XPpK8owoZHjkFcnNRFiIyVed87aVh5VuQmx7FHjC8",
  //      getTime:()=> new client.time()
  //   })

    const client = Binance({
      apiKey:user.apikey,
      apiSecret: user.apisecret,
         getTime:()=> new client.time()
      })
//         const BTC=await client.dailyStats({ symbol:"BTCUSDT" });
//         const ETH=await client.dailyStats({ symbol:"ETHUSDT" });
//         var BTC_price=parseInt(BTC["lastPrice"]);
//         BTC_price=BTC_price*0.2;
//         var ETH_price=ETH["lastPrice"];
//         var BTC_MIN;
//         var ETH_MIN;


//         var data=await client.exchangeInfo()
//         var data2=data["symbols"]
//       //res.send(data2)
// for(var i=0;i<data2.length;i++){ 

// if(data2[i]["symbol"]=="BTCUSDT"){
//     BTC_MIN=data2[i]["filters"][2]["minQty"]
//    // BTC_price=data2[i]["filters"][3]["minNotional"]
//     console.log(BTC_MIN)
// }
// if(data2[i]["symbol"]=="ETHUSDT"){
//     ETH_MIN=data2[i]["filters"][2]["minQty"]
//     //ETH_price=data2[i]["filters"][3]["minNotional"]

//     console.log(ETH_MIN)
// }

// }



 
 // res.send({BTC_price,ETH_price});
//   async function salman(){ 
//    try{
//     const total=req.body.total;
//     const min=req.body.min;

var data1;

for(var i=0;i<req.body.coins.length();i++){
     data1 = await client.order({
        symbol: req.body.coins[i],
        side: 'BUY',
        quantity: req.body.quantity[i],
        price: buy_btc
      })
}





//     res.send({"status":"success",data1,data2});
//    }catch(e){
//      res.send({"status":"fail"})
//    }

//     //29891.00
// }

  res.send({"status":"success",data1});
  // salman().then(data=>{res.send(data)}).catch((e)=>{console.log(e)})
  


 
}