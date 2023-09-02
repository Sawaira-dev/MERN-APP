const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const port = process.env.SERVER_PORT
const cors = require('cors')
const path = require('path')

const clientpath = path.join(__dirname,'./client/dist')
app.use('/', express.static(clientpath))


app.use(express.json())
app.use(cors())
app.use('/api', require('./api/products/Router'))
app.use('/api', require('./api/category/router'))
app.use('/api',require('./api/brands/router'))
app.use('/api',require('./api/user/Router'))



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
