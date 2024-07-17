const exphbs = require('express-handlebars')
const HBS = exphbs.create({
  defaultLayout: 'main',
  layoutsDir: 'src/Views/layouts',
  partialsDir:'src/Views/partials',
  helpers: {
    eq: function (a, b) { return a === b }
  }
}
)
module.exports = HBS