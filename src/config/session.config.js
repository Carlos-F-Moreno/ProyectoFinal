const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const SECRET = process.env.SECRET
const DB_NAME = process.env.DB_NAME

const store = new MongoDBStore({
  databaseName: DB_NAME,
  collection: 'mySessions'
})
store.on('error', (error) => {
  console.log(error)
})
const SESSION = session({
  secret: SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store
})
module.exports = SESSION
