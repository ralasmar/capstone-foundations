require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express();
const {SERVER_PORT} = process.env


app.use(cors())
app.use(express.json())

app.listen(SERVER_PORT, () => console.log(`server running on ${SERVER_PORT}`))
