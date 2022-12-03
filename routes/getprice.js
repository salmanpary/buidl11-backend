const {getprice}=require("../controller/getprice/getprice")
const {getprice1}=require("../controller/getprice/getprice1")
const {getprice2}=require("../controller/getprice/getprice2")
const {getprice3}=require("../controller/getprice/getprice3")
const {getprice4}=require("../controller/getprice/getprice4")
const {getprice5}=require("../controller/getprice/getprice5")
const {getpricehome}=require("../controller/getprice/getpricehome")
const {buy}=require("../controller/account/buy")
const {sell}=require("../controller/account/sell")
const {historybtc}=require("../controller/account/historybtc")
const {historyeth}=require("../controller/account/historyeth")
const {balance}=require("../controller/account/balance.js")
const {buy_btc}=require("../controller/account/buy_btc")
const {buy_eth}=require("../controller/account/buy_eth")
const {buy_allocation}=require("../controller/account/buy_allocation")
const {upload_post}=require("../controller/account/upload_post")
const {view_post}=require("../controller/account/view_post")
const {user1}=require("../controller/basket/user1")
const {user2}=require("../controller/basket/user2")
const {user3}=require("../controller/basket/user3")
const {user4}=require("../controller/basket/user4")

const router = require("express").Router();
const {signup}=require("../controller/auth/signup")
const {login}=require("../controller/auth/login")
const {create_basket}=require("../controller/basket/create_basket")
const {show_basket}=require("../controller/basket/show_basket")
const {users_basket}=require("../controller/basket/users_basket")
const {users_portfolio}=require("../controller/basket/users_portfolio")


router.get("/", getprice);
router.get("/1", getprice1);
router.get("/2", getprice2);
router.get("/3", getprice3);
router.get("/4", getprice4);
router.get("/5", getprice5);
router.get("/home", getpricehome);
router.post("/buy", buy);
router.post("/sell", sell);
router.get("/historybtc", historybtc);
router.get("/historyeth",historyeth)
router.get("/balance",balance)
router.post("/signup",signup)
router.post("/login",login)
router.post("/create_basket",create_basket)
router.get("/show_basket",show_basket)
router.post("/users_basket",users_basket)
router.post("/users_portfolio",users_portfolio)
router.post("/buy_btc",buy_btc)
router.post("/buy_eth",buy_eth)
router.get("/buy_allocation",buy_allocation)
router.post("/upload_post",upload_post)
router.post("/view_post",view_post)
router.get("/user1",user1)
router.get("/user2",user2)
router.get("/user3",user3)
router.get("/user4",user4)


module.exports = router;