const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});
app.get("/api/cakes", (req, res) => {
  res.json([
    { id: 1, name: "Chocolate Cake" },
    { id: 2, name: "Strawberry Cake" }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});