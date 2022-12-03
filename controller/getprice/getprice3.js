const Binance=require('binance-api-node').default;




module.exports.getprice3 = async (req, res) => {

    const client = Binance()
    async function salman(){
      const data = await client.prices();
      
     res.send({
      "ETCETH":data["ETCETH"],
      "YOYOBNB":data["YOYOBNB"],
     })
    
    }
    salman().then(data=>{res.send(data)}).catch((e)=>{console.log(e)})
    
}