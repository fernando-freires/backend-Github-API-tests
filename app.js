const express = require("express");
const app = express();
const router = require("./router/router");

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://frontend-shawandparners.onrender.com"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(router);
app.listen(8080, function (req, res) {
  console.log("Server is running at port 8080!");
});
