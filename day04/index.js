let express = require("express");
const { checkToken } = require("./checkTokenMiddleware");
// app.use(express.json());
let app = express();


app.get("/", (req, res) => {
  res.send({ status: 1, msg: "home api" });
});


//route level middleware check
//check in thunder (http://localhost:8000/news?token=12345)
app.get("/news", checkToken, (req, res) => {
  res.send({
    status: 1,
    msg: "news page",
  });
});

app.listen("8000");
