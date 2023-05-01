const express = require("express")
const app = express()
const port = 5000;
const cors = require('cors')

const data = require('./destination.json')
app.use(cors())

app.get('/data',(req,res)=>{
    res.send(data)
})

app.listen(port,()=>{
    console.log("server is running")
})