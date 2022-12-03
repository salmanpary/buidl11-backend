const request = require("request");
const crypto = require("crypto");
module.exports.balances = async (req, res) => {
  const baseurl = "https://api.coindcx.com";

  const timeStamp = Math.floor(Date.now());
  // To check if the timestamp is correct
  console.log(timeStamp);

  // Place your API key and secret below. You can generate it from the website.
  const key = "08ac5b409d739b87fd6777d3c137c7e9278752d4935164b9";
  const secret =
    "1f6d1ae4c8dcb73a72de76d2d5b96867057fcf0c5cb48a43f048adae52850c51";

  const body = {
    timestamp: timeStamp,
  };

  const payload = new Buffer(JSON.stringify(body)).toString();
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const options = {
    url: baseurl + "/exchange/v1/users/balances",
    headers: {
      "X-AUTH-APIKEY": key,
      "X-AUTH-SIGNATURE": signature,
    },
    json: true,
    body: body,
  };

 request.post(options, function (error, response, body) {
    const ar=[]
    for(let i=0;i<body.length;i++){
        if(body[i].balance!=0){
            ar.push(body[i])

        }
    }
    res.status(200).json(ar);
  });
};
