let express = require("express");

let app = express();

app.use(express.json());

app.get("/student-read", (req, res) => {
  res.send("student read");
});

app.post("/student-insert", (req, res) => {
  res.send("student insert");
});

app.listen("8000");
