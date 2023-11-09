const express = require("express");
const cors = require("cors");
const app = express();
const charactersController = require("./controllers/charactersController.js");
app.use(cors());
app.use(express.json());
app.use("/characters", charactersController);



app.get("/", (req, res) => {
  res.send("Welcome to One Piece Character Server!");
});

app.get("*", (req, res) => {
  res.status(404).json({ success: false, data: { error: "page not found" } });
});
module.exports = app;