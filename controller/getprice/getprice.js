const Binance=require('binance-api-node').default;




module.exports.getprice = async (req, res) => {

    const client = Binance()
    async function salman(){
      const data = await client.prices();
      
      res.send(data);
    
    }
    salman().then(data=>{res.send(data)}).catch((e)=>{console.log(e)})
    
}