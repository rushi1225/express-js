let express = require("express");
app.use(express.json())

let app = express();

app.get("/", (req, res) => {
  res.send({ status: 1, msg: "home api" });
});

//bodydata in json format
app.post("/login", (req, res) => {
  res.send({
    status: 1,
    msg: "login page",
    bodyData: req.body,
  });
});

//query data using post using url
app.post("/admin", (req, res) => {
  res.send({
    status: 1,
    msg: "admin page",
    queryData: req.query,
  });
});

//dyanamic params using id
//show on browser
app.get("/about/:id", (req, res) => {
  let currentId = req.params.id;
  res.send("About page api " + currentId);
});

app.listen("8000");
