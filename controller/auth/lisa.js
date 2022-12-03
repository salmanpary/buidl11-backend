// const Binance=require('binance-api-node').default;
const Userschema = require("../../model/user"); 
const Binance=require('binance-api-node').default;


module.exports.lisa = async (req, res) => {
    const user=await Userschema.findOne({name:"lisa"});
    // const client = Binance({
    //   apiKey: "aYzZOAeym4hX76k6jMogk7mhJNYnywZuAI6jl7Mii89DzrMAw4B6vv9NvU1aU9fu",
    //   apiSecret: "JmU2M67eYD9ZqBLMF8JH4R5XPpK8owoZHjkFcnNRFiIyVed87aVh5VuQmx7FHjC8",
    //      getTime:()=> new client.time()
    //   })

      const client = Binance({
        apiKey: user.apikey,
        apiSecret: user.apisecret,
           getTime:()=> new client.time()
        })
        // console.log(await client.dailyStats({ symbol: 'USDTDAI' }))

        const all_Data=await client.accountInfo();

        coin_names = [];
        coin_prices = [];
balances_Data=all_Data["balances"];
console.log(balances_Data);
for(var i=0;i<balances_Data.length;i++){
    if(balances_Data[i]["free"]>0){
       coin_names.push(balances_Data[i]["asset"]);
         coin_prices.push(balances_Data[i]["free"]);
    }

}
var ar=[]

for(var i=0;i<coin_names.length;i++){
    coin_names[i]=coin_names[0]+"BUSD";
}
//calculate total price
var total_price=0;
for(var i=0;i<coin_prices.length;i++){
    total_price=total_price+coin_prices[i];
}

for(var i=0;i<coin_names.length;i++){
    ar.push({
        name:coin_names[i],
        price:coin_prices[i],
        percentage:"50",
        allocation:"50"
    })
}
res.send({ar,"overall_gain":"0.00045","one_day_gain":"0.0085","invested_value":total_price});
    
}   
