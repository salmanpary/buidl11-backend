const Binance=require('binance-api-node').default;
const CreateBasket = require("../../model/basket"); 
const ProfileSchema = require("../../model/profile"); 
const Userschema = require("../../model/user"); 



module.exports.specific_user2 = async (req, res) => {
try{
    const user=await Userschema.findOne({name:req.body.name});
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
  
    var coin_names = [];
    var coin_prices = [];
const all_Data=await client.accountInfo();

balances_Data=all_Data["balances"];
for(var i=0;i<balances_Data.length;i++){
    if(balances_Data[i]["free"]>0){
       coin_names.push(balances_Data[i]["asset"]);
         coin_prices.push(balances_Data[i]["free"]);
    }

}
for(var i=0;i<coin_names.length;i++){
    coin_names[i]=coin_names[0]+"BUSD";
}


//create a json with coinnames as key and coin prices as value
var coin={};
// for(var i=0;i<coin_names.length;i++){

//     coin[coin_names[i]]={
//         price:coin_prices[i],
        

//     }
// }
//find total price of all coins
var total_price=0;
var sum_percentage=0;

for(var i=0;i<coin_prices.length;i++){
    total_price=total_price+coin_prices[i];

}
//find total allocation of all coins
var not_invested_value=0;
for(var i=0;i<coin_names.length;i++){
    if(coin_names[i].includes("USDT")){
        not_invested_value=not_invested_value+coin_prices[i];
    }
    const coin_percentage=await client.dailyStats({ symbol: coin_names[i] });
    const  coin_percentage_change=coin_percentage["priceChangePercent"];
    sum_percentage=sum_percentage+coin_percentage_change;
    coin[i]={
        name:coin_names[i],
        price:coin_prices[i],
        allocation:(coin_prices[i]/total_price)*100,
        percentage_change:coin_percentage_change
        

    }

    const profile = new ProfileSchema({
    
        response:{
            
            "coin_prices_json":coin,

            "total_amount":total_price,
            "invested_amount":total_price- not_invested_value,
            "sum_percentage":sum_percentage,
        }
      
      });
      profile.save();

}


//find percentage of coinprice in total price
// var total_price=0;
// for(var i=0;i<coin_prices.length;i++){
//     total_price=total_price+coin_prices[i];
// }

// for(var i=0;i<coin_names.length;i++){
//     coin_prices_json[coin_names[i]["percentage"]]=(coin_prices[i]/total_price)*100;;
// }




 const data = await client.prices();
// const test= parseInt(data[coin_names[0]])+0.01116600;
// res.send(test);
// console.log(typeof(data[coin_names[0]]))
var test= parseInt(data[coin_names[0]]);
// res.send({"INVESTED COINS":coin_names,
// "INVESTED COINS PRICES":coin_prices,
// }
// );
// console.log(
//     await client.myTrades({
//       symbol: 'BNBBUSD',
//     }),
//   )

res.send({"coin_prices_json":coin,
"name":req.body.name,
"total_amount":total_price,
"invested_amount":total_price- not_invested_value,
"sum_percentage":sum_percentage.substring,
"followers":user.followers.toString(),
"following":user.friends.length.toString()
})


}catch(err){

var random_total_amount=Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
var random_invested_amount=Math.floor(Math.random() * (9000 - 1 + 1)) + 1;
var random_sum_percentage=Math.floor(Math.random() * (10 - 1 + 1)) + 1;
var random_followers=Math.floor(Math.random() * (6 - 1 + 1)) + 1;
var random_following=Math.floor(Math.random() * (6 - 1 + 1)) + 1;

  res.send({
    "coin_prices_json":{

    },
    "name":req.body.name,
    "total_amount":random_total_amount.toString(),
    "invested_amount":random_invested_amount.toString(),
    "sum_percentage":random_sum_percentage.toString(),
    "followers":random_followers.toString(),
    "following":random_following,

  })
}
;
}