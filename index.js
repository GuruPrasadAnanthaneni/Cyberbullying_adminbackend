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
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://cyberbullying-frontend.vercel.app/","https://cyberbullying-adminfrontend.vercel.app/"
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., mobile apps, Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(cors());
app.use("/Signup-Login", SL);
const port = 5502;
app.listen(port, () => {
  console.log("Server Started on " + port);
});
