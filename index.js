require('dotenv').config()
require('./src/config/db.config.js')
const express = require('express')
const app = express()
const path = require('path')
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 3000
const indexRoutes = require('./src/routes/index.routes.js')
const helmet = require('helmet')
const morgan = require('morgan')
const hbs = exphbs.create({
  defaultLayout: 'main',
  layoutsDir: 'src/Views/layouts',
  helpers: {
    eq: function (a, b) { return a === b }
  }
}
)
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './public')))
app.use(helmet())
app.use(morgan('tiny'))
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'src/Views'))
app.use(indexRoutes)

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})
