const mongoose = require("mongoose");
const express = require("express");
const SL = require("./routes/SignupLoginroutes");
const cors = require("cors");

const app = express();

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://guru:guru@cluster0.oowiasj.mongodb.net/CyberBullyingAdmin"
);
const db = mongoose.connection;
db.on("open", () => {
  console.log("Database Connected");
});
db.on("error", () => {
  console.log("Database not Connected");
});

app.use(express.json());
app.use(cors());
app.use("/Signup-Login", SL);
const port = 5502;
app.listen(port, () => {
  console.log("Server Started on " + port);
});
