const router = require('express').Router()
const coursesController = require('../controllers/course.controllers.js')
router.get('/', coursesController.index)
router.get('/:course', coursesController.getCourse)
router.post('/create', coursesController.createCourse)
module.exports = router
