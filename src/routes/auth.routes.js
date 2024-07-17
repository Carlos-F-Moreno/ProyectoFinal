const router = require('express').Router()
const authController = require('../controllers/auth.controller.js')
const {userValidator} = require('../validators/register.validator.js')

router.get('/login', (req, res) => {res.render('login')})
router.post('/login', authController.login)
router.get('/register', (req, res) => {res.render('register')})
router.post('/register',userValidator , authController.register)
router.post('/logout', authController.logout);
module.exports = router
