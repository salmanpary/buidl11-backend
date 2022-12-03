// const Binance=require('binance-api-node').default;
const Userschema = require("../../model/user");



module.exports.user1 = async (req, res) => {

    var user1 = {
        "name": "Abdul malik",
      
        "total_amount": "23",
    "invested_amount": "0.00430549",
    "0": {
        "name": "BNBBUSD",
        "price": "0.00430549",
        "allocation": 100,
        "percentage_change": "0.513"
    },
    


    }


    var user2 = {
        "name": "sreejith ks",
      
        "total_amount": "12",
    "invested_amount": "4459",
    "0": {
        "name": "ETHBUSD",
        "price": "0.00430549",
        "allocation": 100,
        "percentage_change": "0.513"
    },
    


    // }

    // var user3 = {
    //     "name": "Rosh roy",
      
    //     "total_amount": "1",
    // "invested_amount": "2988",
    // "0": {
    //     "name": "DOGEBUSD",
    //     "price": "0.00430549",
    //     "allocation": 10,
    //     "percentage_change": "0.513"
    // },
    // "1": {
    //     "name": "ETHBUSD",
    //     "price": "4.30549",
    //     "allocation": 90,
    //     "percentage_change": "1.513"
    // },
    


    // }

    // var user4 = {
    //     "name": "bijoy babu",
      
    //     "total_amount": "26",
    // "invested_amount": "2988",
 
    // "0": {
    //     "name": "ETHBUSD",
    //     "price": "9.30549",
    //     "allocation": 100,
    //     "percentage_change": "1.513"
    // },
    


    }

  
  
    res.send([user1,user2])

}