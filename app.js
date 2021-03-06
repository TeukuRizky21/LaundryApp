require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.SERVER_PORT || 2121;

app.use("/uploads", express.static("./uploads"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const router = require("./src/routers/index.js");

app.use("/app/v1", router);

app.get('*', (req, res) => {
  res.json({
    message: 'Not Found',
    error: 404,
    data: {},
    error: false
  })
})

app.listen(port, () => {
  console.log(`\n Cors Enable App Listen Port ${port}`);
});
