require('dotenv').config()
const express = require('express')

const app = express()

// const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})
app.get('/twitter', (req, res) => {
  res.send('you are inside twitter now!!!')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listing on port ${process.env.PORT}`)
})
