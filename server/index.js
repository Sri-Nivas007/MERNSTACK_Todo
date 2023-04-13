const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const MongoDBConnect = require("./connections/db");
const todorouter = require("./router/todorouter");

dotenv.config();
const app = express();
const Port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", todorouter);

MongoDBConnect()
  .then((res) => {
    app.listen(Port);
    console.log(`server connected to the ${Port}`);
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("well done");
});
