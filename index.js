require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=> {
    res.send('harshitgoud01')
})

app.get('/login', (req, res)=> {
    res.send('<h1>Please login to our website</h1>')
})

app.get('/youtube', (req, res)=>{
    res.send('<a href="youtube.com", style="color:red">Click</a>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
