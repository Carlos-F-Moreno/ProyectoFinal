function isAuthenticated (req, res, next) {
  if (req.session.user) next()
  else res.json('you are not logged in')
}
module.exports = { isAuthenticated }
