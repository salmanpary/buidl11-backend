
// const Binance=require('binance-api-node').default;
const PostSchema = require("../../model/post"); 
const Userschema = require("../../model/user");



module.exports.upload_post = async (req, res) => {
try{

    const user=await Userschema.findOne({email:req.body.email});

    var post=new PostSchema({
name:user.name,
description:req.body.description,

    });
    post.save();
    res.send(post);
}catch(e){
res.send("Error adich")
}
}
