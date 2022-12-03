const Binance=require('binance-api-node').default;
const  dotenv=require('dotenv');
const path = require("path");
dotenv.config({ path:"config.env" });



module.exports.historyeth = async (req, res) => {

    const client = Binance()
    const client2 = Binance({
      apiKey: "ZsuUZdGFXljYU9NXTkb5XXFeFgKy4A1N4lUe9ZHuNGoWuryY39nA1YKNjirHEiQ9",
      apiSecret: "EIeXI9QNQQslzn84fk9ijMMerprWv1QOHay2GJVKOo5kQUuIbolTpLNlvLS9k7ot",
         getTime:()=> new client.time()
      })
      
      
    async function salman(){
   const data=await client2.myTrades(
 {symbol:"ETHUSDT"}
   )
//    res.send(data)
   res.send(
data
   )
    }
    salman().then(data=>{res.send(data)}).catch((e)=>{res.status(500).send(e.message)})
    
}