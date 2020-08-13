const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

//bring in the models
require('./models/User')

//settings
app.set('port', process.env.PORT || 4000)

//middleware
app.use(cors())
app.use(express.json())

//routes
app.use(require('./routes/auth'))

module.exports = app