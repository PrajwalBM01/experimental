const express = require('express')
var cors = require('cors')
const app = express()
const PORT = 3000;

app.use(cors())
app.use(express.json())

app.get('/random',(req,res)=>{
    res.json({
        msg:`${Math.random()}`
    })
})

app.listen(PORT,()=>{
    console.log("server connected")
})