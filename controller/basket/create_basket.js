const Binance = require('binance-api-node').default;
const CreateBasket = require("../../model/basket");



module.exports.create_basket = async (req, res) => {

    const coins = req.body.coins;
    const email = req.body.email;
    const allocation = req.body.allocation;
    const min_amount = req.body.min_amount;
    const commission = req.body.commission;
    const description = req.body.description;
    const title = req.body.title;
    const marketing_tagline = req.body.marketing_tagline;

    const basket = new CreateBasket({
        email,
        coins,
        allocation,
        min_amount,
        description,
        commission,
        title,
        marketing_tagline
    })
    
    await basket.save()
    res.send({
        basket
    })


    // const client = Binance()
    // async function salman(){
    //   const data = await client.prices();

    //   res.send(data);

    // }


}