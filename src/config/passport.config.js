const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('../models/user.model.js')
const { compare } = require('bcrypt')

passport.use(
  new LocalStrategy(
    { usernameField: 'dni', passwordField: 'password' },
    async (dni, password, done) => {
      console.log(dni, password)
      const user = await User.findOne({ dni })
      console.log(user)
      if (!user) return done(null, false, { message: 'not user found' })
      const equal = compare(password, user.password)
      if (!equal) return done(null, false, { message: 'password incorrect' })
      return done(null, user)
    }
  )
)
passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    done(null, user)
  } catch (error) {
    done(null, false)
  }
})
