const Binance=require('binance-api-node').default;




module.exports.getprice2 = async (req, res) => {

    const client = Binance()
    async function salman(){
      const data = await client.prices();
      
    res.send({"BTCUSDT":data["BTCUSDT"],
    "OAXETH":data["OAXETH"]});

    }
    salman().then(data=>{res.send(data)}).catch((e)=>{console.log(e)})
    
}