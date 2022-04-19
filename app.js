var express = require('express')
var path = require('path')
var logger = require('morgan')
var session = require('express-session')
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
module.exports = app
