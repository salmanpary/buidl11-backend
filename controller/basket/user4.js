// const Binance=require('binance-api-node').default;
const Userschema = require("../../model/user");



module.exports.user4 = async (req, res) => {

    var user1 = {
        "name": "bijoy babu",
      
        "total_amount": "3500",
    "invested_amount": "2988",
 
    "0": {
        "name": "ETHBUSD",
        "price": "9.30549",
        "allocation": 100,
        "percentage_change": "1.513"
    },
    


    }
  
  
    res.send([user1])

}