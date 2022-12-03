const Binance=require('binance-api-node').default;




module.exports.getprice5 = async (req, res) => {

    const client = Binance()
    async function salman(){
      const data = await client.prices();
      const BNBUSDT = await client.dailyStats({
        symbol: 'BTCUSDT'
      })
      const ETHUSDT = await client.dailyStats({
        symbol: 'ETHUSDT'
      })
      

      res.send(
        {
          "BTCUSDT":{
            "BTCUSDT":data["BTCUSDT"],
            "priceChangePercent":BNBUSDT["priceChangePercent"],
            "priceChange":BNBUSDT["priceChange"],
          },
          "ETHUSDT":{
            "ETHUSDT":data["ETHUSDT"],
            "priceChangePercent":ETHUSDT["priceChangePercent"],
            "priceChange":ETHUSDT["priceChange"],
          },
   
        }
      )
    
    }
    salman().then(data=>{res.send(data)}).catch((e)=>{console.log(e)})
    
}