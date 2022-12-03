// const Binance=require('binance-api-node').default;
const Userschema = require("../../model/user");



module.exports.user2 = async (req, res) => {

    var user1 = {
        "name": "sreejith ks",
      
        "total_amount": "4459",
    "invested_amount": "4459",
    "0": {
        "name": "ETHBUSD",
        "price": "0.00430549",
        "allocation": 100,
        "percentage_change": "0.513"
    },
    


    }
  
  
    res.send([user1])

}