const Binance=require('binance-api-node').default;




module.exports.getprice1 = async (req, res) => {

    const client = Binance()
    async function salman(){
      const data = await client.prices();
      
      res.send({
        "ETHBTC":data["ETHBTC"],
        "NEOETH":data["NEOETH"],
      })
  
    }
    salman().then(data=>{res.send(data)}).catch((e)=>{console.log(e)})
    
}