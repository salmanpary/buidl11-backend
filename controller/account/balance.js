const Binance=require('binance-api-node').default;
const  dotenv=require('dotenv');
const path = require("path");
dotenv.config({ path:"config.env" });
const Adminschema=require('../../model/admin');



module.exports.balance = async (req, res) => {
 
    const client = Binance()
    const client2 = Binance({
        apiKey: "ZsuUZdGFXljYU9NXTkb5XXFeFgKy4A1N4lUe9ZHuNGoWuryY39nA1YKNjirHEiQ9",
        apiSecret: "EIeXI9QNQQslzn84fk9ijMMerprWv1QOHay2GJVKOo5kQUuIbolTpLNlvLS9k7ot",
         getTime:()=> new client.time()
      })
      
      
    async function salman(){
   const data=await client2.accountInfo(

   )
 console.log(data)
 
   res.send(
{"BTC":data["balances"][0]["free"],
"USDT":data["balances"][11]["free"]
}
   )

    }
    salman().then(data=>{res.send(data)}).catch((e)=>{res.status(500).send(e.message)})
    
}