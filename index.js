require('dotenv').config()
require('./src/config/db.config.js')
const express = require('express')
const app = express()
const path = require('path')
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 3000
const SECRET = process.env.SECRET
const DB_NAME = process.env.DB_NAME
const indexRoutes = require('./src/routes/index.routes.js')

const helmet = require('helmet')

const morgan = require('morgan')

const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

const store = new MongoDBStore({
  databaseName: DB_NAME,
  collection: 'mySessions'
})
store.on('error', (error) => {
  console.log(error)
})
app.use(session({
  secret: SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store,
  resave: true,
  saveUninitialized: true
}))
// Handlebars config
const hbs = exphbs.create({
  defaultLayout: 'main',
  layoutsDir: 'src/Views/layouts',
  helpers: {
    eq: function (a, b) { return a === b }
  }
}
)
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'src/Views'))
app.use(express.static(path.join(__dirname, './public')))
// middleware
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
// logger
app.use(morgan('tiny'))

app.use(indexRoutes)

app.get('/session', (req, res) => {
  req.session.user = req.query.user
  req.session.cont = req.session.cont ? ++req.session.cont : 1
  console.log(req.session.id)
  res.send(`Hello ${req.session.user} your visit on ${req.session.cont}`)
})
app.get('/destroy', (req, res) => {
  if (req.session) {
    req.session.destroy(req.session.id)
  }
  res.send('session destroy')
})
app.listen(PORT, () => {
  console.log(`The server is running on the port ${PORT}`)
})
