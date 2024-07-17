const  router = require('express').Router()

router.post('/create', noteController.create)
router.get('/:id', noteController.getNote)
router.get('/:id', noteController.getNotes)
router.patch('/:id', noteController.update)

module.exports = router
