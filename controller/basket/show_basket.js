const Binance=require('binance-api-node').default;
const CreateBasket = require("../../model/basket"); 



module.exports.show_basket = async (req, res) => {

    const baskets=await CreateBasket.find({approved:"true"})
    res.send({baskets})
    
}