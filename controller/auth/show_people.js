// const Binance=require('binance-api-node').default;
const Userschema = require("../../model/user"); 



module.exports.show_people = async (req, res) => {
try{
    const people=await Userschema.findOne({email:req.body.email});
    var friends=people["friends"]
    res.send(friends)
}
catch(e){
    res.send("Error adich")
}
    
    
}
