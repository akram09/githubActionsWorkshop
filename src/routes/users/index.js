const express = require('express')
// eslint-disable-next-line new-cap
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ user: 'Akram' })
})

module.exports = router
