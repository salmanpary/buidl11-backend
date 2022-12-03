const Binance=require('binance-api-node').default;
const  dotenv=require('dotenv');
const path = require("path");
const UserSchema = require("../../model/user"); 
dotenv.config({ path: path.join(__dirname, "config.env") });



module.exports.buy_eth = async (req, res) => {
  
try{
    const user=await UserSchema.findOne({email:req.body.email});
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

      // const data1 = await client.order({
      //   symbol: 'BTCUSDT',
      //   side: 'BUY',
      //   quantity:'0.00041',
      //   price: '29245.00'
      // })
      const data2 = await client.order({
        symbol: 'ETHUSDT',
        side: 'BUY',
        quantity: '0.0070',
        price: '1670.00'
      })


  //     res.send({"status":"success",data1,data2});
  //    }catch(e){
  //      res.send({"status":"fail"})
  //    }
 
  //     //29891.00
  // }

    res.send({"status":"success",data2});
    // salman().then(data=>{res.send(data)}).catch((e)=>{console.log(e)})
   

}catch(e){
    res.send("error ahne")
}
   
}