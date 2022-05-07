const express = require('express')
const morgan = require('morgan')

const globalRouter = require('./routes')

const app = express()

// set up morgan for logging
app.use(morgan('combined'))

const port = 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
