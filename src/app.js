const express = require('express')
const morgan = require('morgan')

const greetRouter = require('./routes/greet')
const usersRouter = require('./routes/users')

const app = express()

// set up morgan for logging
app.use(morgan('combined'))

app.use('/greet', greetRouter)
app.use('/users', usersRouter)

app.get('/', (req, res) => {
  res.send('Hello WOrld ')
})

module.exports = app
