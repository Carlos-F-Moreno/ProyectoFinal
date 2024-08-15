const router = require('express').Router()
const authController = require('../controllers/auth.controller.js')
const { userValidator } = require('../validators/register.validator.js')
const {
  checkAuthenticated,
  checkNotAuthenticated,
} = require('../middlewares/authenticate.middleware.js')

router.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login')
})
router.post('/login', checkNotAuthenticated, authController.login)
router.get('/register', checkNotAuthenticated, (req, res) => {
  let msg = req.flash('error')
  console.log(msg)
  res.render('register')
})
router.post(
  '/register',
  userValidator,
  checkNotAuthenticated,
  authController.register
)
router.post('/logout', checkAuthenticated, authController.logout)
module.exports = router
