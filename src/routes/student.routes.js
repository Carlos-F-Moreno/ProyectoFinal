const router = require('express').Router()
const studentController = require('../controllers/student.controller.js')

router.get('/:id', studentController.renderProfile)
router.post('/create', studentController.create)
router.patch('/update', studentController.update)
router.patch('/attendance',studentController.checkAttendance)

module.exports = router
