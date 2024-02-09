const router = require('express').Router()
const studentRoutes = require('./students.routes.js')
const coursesRoutes = require('./courses.routes.js')
const teachersRoutes = require('./teacher.routes.js')
const authRoutes = require('./auth.routes.js')

router.get('/', (req, res) => res.render('index')) /* Replantear que pagina sera la primera en inicia LogIng/Landing/Presentacion */
router.use('/students', studentRoutes)
router.use('/courses', coursesRoutes)
router.use('teachers', teachersRoutes)
router.use(authRoutes)

module.exports = router
