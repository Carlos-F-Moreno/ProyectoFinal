const  router = require('express').Router()

router.post('/create', teacherController.create)
router.get('/:id', teacherController.getTeacher)
router.patch('/:id', teacherController.update)

module.exports = router
