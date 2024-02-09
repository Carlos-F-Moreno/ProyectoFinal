const router = require('express').Router()
router.get('/', (req, res) => res.json({ message: 'Estamos en Teacher routes' }))
module.exports = router
