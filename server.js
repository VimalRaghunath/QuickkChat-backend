const express = require('express')
const chats = require('./data/data')
const dotenv = require("dotenv")

const app = express()
dotenv.config()

app.get('/', (req,res) => {
    res.send("Api is running")
})

app.get('/api/chat', (req,res) => {
    res.send(chats);
})

const PORT = process.env.PORT || 7000

app.listen(7000, console.log(`Server Running on PORT ${PORT}`));