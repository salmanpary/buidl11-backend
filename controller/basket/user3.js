// const Binance=require('binance-api-node').default;
const Userschema = require("../../model/user");



module.exports.user3 = async (req, res) => {

    var user1 = {
        "name": "Rosh roy",
      
        "total_amount": "2988",
    "invested_amount": "2988",
    "0": {
        "name": "DOGEBUSD",
        "price": "0.00430549",
        "allocation": 10,
        "percentage_change": "0.513"
    },
    "1": {
        "name": "ETHBUSD",
        "price": "4.30549",
        "allocation": 90,
        "percentage_change": "1.513"
    },
    


    }
  
  
    res.send([user1])

}