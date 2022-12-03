// const Binance=require('binance-api-node').default;
const Userschema = require("../../model/user");



module.exports.friends = async (req, res) => {

    var user1 = {
        "name": "Abdul malik",
        "invested_value": "2429",
        "overall_gain": "19",
        "one_day_gain": "8"


    }
    var user2= {
        "name": "sreejith ks ",
        "invested_value": "4459",
        "overall_gain": "9",
        "one_day_gain": "23"


    }
    var user3 = {
        "name": "Rosh roy",
        "invested_value": "2988",
        "overall_gain": "39",
        "one_day_gain": "18"


    }
    var user4 = {
        "name": "bijoy babu",
        "invested_value": "377",
        "overall_gain": "9",
        "one_day_gain": "13"


    }
    res.send([user1,user2,user3,user4])

}