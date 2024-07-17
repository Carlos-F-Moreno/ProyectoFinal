const checkAuthenticated = (req, res, next) => {
  console.log('Checking authentication...')
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}
function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}
module.exports = { checkAuthenticated, checkNotAuthenticated }
