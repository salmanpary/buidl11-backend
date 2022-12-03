// const Binance=require('binance-api-node').default;
const Userschema = require("../../model/user"); 



module.exports.show_not_friends = async (req, res) => {
try{    const users=await Userschema.find();
    var not_friends=[];
    const user=await Userschema.findOne({email:req.body.email});
    const friends=user["friends"]

for(var i=0;i<users.length;i++){
not_friends.push(users[i]["name"]);
}

for(var i=0;i<friends.length;i++){
    //remove each value of friends from not_friends
    not_friends.splice(not_friends.indexOf(friends[i]),1);
   
}
var users_json=[];

for(var i=0;i<not_friends.length;i++){
    if(not_friends[i]!=user["name"]){
        var temp_user=await Userschema.findOne({name:not_friends[i]},{apikey:0,apisecret:0,password:0});
        users_json.push(temp_user);
    }
   
}}catch(e){
    console.log(e);
    res.status(500).send("invalid mail id probably :)");
}

//


   res.send(users_json) 
}