let express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.send({ status: 1, msg: "home page api" });
});


app.get("/about",(req,res)=>{
    res.send({status:1, msg:"about page api"})
})


app.listen("8000");
