const { prices } = require("../controller/coindcx/prices");
const router = require("express").Router();
router.get("/prices", prices);
module.exports = router;
