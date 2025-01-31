let express = require("express");
// app.use(express.json());
let app = express();
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



app.use(checkToken)

app.get("/", (req, res) => {
  res.send({ status: 1, msg: "home api" });
});

app.get("/about", (req, res) => {
  res.send({
    status: 1,
    msg: "about page",
  });
});

app.listen("8000");
