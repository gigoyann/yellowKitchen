const express = require('express');
const app = express()
const cors = require("cors")
app.use(express.json)
app.use(cors)
const authRouter = require("./routes/authRoute")

app.use("/api/user", authRouter)

module.exports = app



