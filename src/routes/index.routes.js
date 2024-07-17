const router = require('express').Router()
const studentRoutes = require('./student.routes.js')
const coursesRoutes = require('./courses.routes.js')
const authRoutes = require('./auth.routes.js')
const {
  checkAuthenticated,
  checkNotAuthenticated
} = require('../middlewares/authenticate.middleware.js')

router.get('/',(req, res) => {
  res.render('index')
})
router.use('/profile', checkAuthenticated,studentRoutes)
router.use('/courses', checkAuthenticated,coursesRoutes)
router.use(authRoutes)


module.exports = router
