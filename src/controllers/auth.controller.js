const passport = require('passport')
const serviceAuth = require('../services/auth.service.js')

const login = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
})

const register = async (req, res) => {
  try {
   console.log(req.body)
    const result = await serviceAuth.register(req.body)
    console.log(result)
    req.flash('success_msg', 'registered')
    res.redirect('/')
  } catch (error) {
    res.redirect('/register')
  }
}
const logout = async (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err)
    }
    req.flash('success_msg', 'your logged out')
    res.redirect('/')
  })
}
module.exports = {
  login,
  register,
  logout,
}
