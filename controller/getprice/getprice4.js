const Binance=require('binance-api-node').default;




module.exports.getprice4 = async (req, res) => {

    const client = Binance()
    async function salman(){
      const data = await client.prices();
      
     res.send({"POWRETH":data["POWRETH"],
     "ARNETH":data["ARNETH"],})
    
    }
    salman().then(data=>{res.send(data)}).catch((e)=>{console.log(e)})
    
}