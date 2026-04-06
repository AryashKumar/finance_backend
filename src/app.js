require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/authRoutes"));
app.use("/records", require("./routes/recordRoutes"));
app.use("/dashboard", require("./routes/dashboardRoutes"));

app.get("/", (req, res) => {
    res.send("Finance Backend Running");
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running");
});