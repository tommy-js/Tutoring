const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./Schema");
const bodyParser = require("body-parser-graphql");

const app = express();

app.use(cors());

mongoose.connect();

mongoose.connection.once("open", () => {
  console.log("Connected to the Atlas server");
});

app.use(bodyParser.graphql({ limit: "1mb" }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("listening to port 4000");
});
