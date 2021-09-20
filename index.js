const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv/config");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_CONNECTION).then(() => {
  console.log("Connected to Mongodb Atlas.");
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
