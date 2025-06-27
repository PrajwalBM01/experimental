const express = require('express')
var cors = require('cors')
const app = express()
const PORT = 6006;

app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get('/random',(req,res)=>{
    res.json({
        msg:`${Math.random()}`
    })
})

app.listen(PORT,()=>{
    console.log("server connected")
})