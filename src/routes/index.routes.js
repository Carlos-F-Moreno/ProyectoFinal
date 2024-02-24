const router = require('express').Router()
const studentRoutes = require('./students.routes.js')
const coursesRoutes = require('./courses.routes.js')
const teachersRoutes = require('./teacher.routes.js')
const authRoutes = require('./auth.routes.js')
const { isAuthenticated } = require('../middlewares/authenticate.middleware.js')

router.get('/', (req, res) => res.render('index', { name: req.session.user })) /* Rethink which page will be the first to start LogIng/Landing/Presentation */
router.use('/students', studentRoutes)
router.use('/courses', coursesRoutes)
router.use('/teachers', isAuthenticated, teachersRoutes)
router.use(authRoutes)

module.exports = router
