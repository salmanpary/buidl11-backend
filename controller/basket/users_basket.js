const Binance=require('binance-api-node').default;
const CreateBasket = require("../../model/basket"); 



module.exports.users_basket = async (req, res) => {

    const baskets=await CreateBasket.find({email:req.body.email})
    res.send({baskets})
    
}