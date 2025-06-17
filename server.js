const express = require("express");
require("dotenv").config();

const userRouters = require("./routes/user.routes");

const { connectDB } = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use("/v1/users", userRouters);

//! Should be implemented at last
app.use(error);

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log("Express server is listening on port 9000");
});
