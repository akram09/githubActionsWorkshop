const express = require('express')
const morgan = require('morgan')

const globalRouter = require('./routes/greet')

const app = express()

// set up morgan for logging
app.use(morgan('combined'))

app.use('/greet', globalRouter)

app.get('/', (req, res) => {
  res.send('Hello WOrld ')
})

const port = 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
