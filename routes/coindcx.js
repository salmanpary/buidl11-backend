const { prices } = require("../controller/coindcx/prices");
const {balances}=require("../controller/coindcx/balances");
const router = require("express").Router();
router.get("/prices", prices);
router.get("/balances",balances);
module.exports = router;
