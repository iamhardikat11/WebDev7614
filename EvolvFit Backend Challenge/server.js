const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

const username = "<iamhardikat11>";
const password = "<Hardik789321>";
const cluster = "<cluster name>";
const dbname = "EvolvFitChallengeDB";

mongoose.connect(
  `mongodb+srv://iamhardikat11:<${password}>@cluster0.4xtqb.mongodb.net/?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});