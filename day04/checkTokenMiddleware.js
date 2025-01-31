myToken = "12345";

//middleware
let checkToken = (req, res, next) => {
  if (req.query.token == "" || req.query.token == undefined) {
    return res.send({
      staus: 0,
      msg: "fill the token",
    });
  }

  if (req.query.token != myToken) {
    return res.send({
      status: 0,
      msg: "fill the correct token",
    });
  }
  next();
};

module.exports={checkToken}