
// const Binance=require('binance-api-node').default;
const Userschema = require("../../model/user"); 



module.exports.test = async (req, res) => {

    const test=await client.dailyStats({ symbol:"BTCUSDT" });

    res.send(test)
    
}
