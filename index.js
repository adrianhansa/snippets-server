const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv/config");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors({ origin: "http://localhost:3000" }));

const snippetRoutes = require("./routes/snippets");
app.use("/snippets", snippetRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_CONNECTION).then(() => {
  console.log("Connected to Mongodb Atlas.");
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
