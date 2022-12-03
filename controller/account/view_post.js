
// const Binance=require('binance-api-node').default;
const Postschema = require("../../model/post"); 
const Userschema = require("../../model/user");



module.exports.view_post = async (req, res) => {
const user=await Userschema.findOne({email:req.body.email});
const posts=await Postschema.find();
var friends=user["friends"]

//find posts with name in friends array
var posts_friends=[]
for(var i=0;i<posts.length;i++){
    if(friends.includes(posts[i].name)){
        posts_friends.push(posts[i])
    }

}
res.send(posts_friends)


}
