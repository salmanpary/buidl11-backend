const request = require("request");
const baseurl = "https://api.coindcx.com";
const axios = require("axios");

module.exports.prices = async (req, res) => {
  await request.get(
    baseurl + "/exchange/ticker",
    function (error, response, body) {
      const data = JSON.parse(body);
      const arr = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].market === "BTCINR") {
          arr.push(data[i]);
        }
        if (data[i].market === "ETHINR") {
          arr.push(data[i]);
        }
        if (data[i].market === "BNBINR") {
          arr.push(data[i]);
        }
        if (data[i].market === "SOLINR") {
          arr.push(data[i]);
        }
        if (data[i].market === "DOGEINR") {
          arr.push(data[i]);
        }
      }
      const transformmedarray = arr.map((item) => {
        return {
          name: item.market,
          price: item.last_price,
          volume: item.volume,
          change: item.change_24_hour,
        };
      });
      res.status(200).json(transformmedarray);
    }
  );
};
