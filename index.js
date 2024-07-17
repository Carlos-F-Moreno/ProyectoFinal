require('dotenv').config()
require('./src/config/db.config.js')
require('./src/config/passport.config.js')

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const SESSION = require('./src/config/session.config.js')
const HBS = require('./src/config/handlebars.config.js')
const indexRoutes = require('./src/routes/index.routes.js')
const helmet = require('helmet')
const logger = require('morgan')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const app = express()
const flash = require('connect-flash')
const passport = require('passport')
const methodOverride = require('method-override')

//over rider
app.use(methodOverride('_method'))

// middleware
app.use(flash())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './public')))

//Security
app.use(helmet())

// logger
app.use(logger('tiny'))

//cookie-parser
app.use(cookieParser('secret'))

//Session
app.use(SESSION)

//passport
app.use(passport.initialize())
app.use(passport.session())

//handlebars
app.engine('handlebars', HBS.engine)
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'src/Views'))

//global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  next()
})
//favicon
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')))

//routes
app.use(indexRoutes)

app.use('*', (req, res) => {
  res.send('not search')
})
app.listen(PORT, () => {
  console.log(`The server is running on the port ${PORT}`)
})
