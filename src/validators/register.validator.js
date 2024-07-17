const { body } = require('express-validator')
const { validateResult } = require('../utils/validate.util.js')

const userValidator = [
  body('dni')
    .exists()
    .isNumeric()
    .not()
    .isEmpty()
    .withMessage('the DNI is required'),
  body('password')
    .exists()
    .isLength({ min: 8 })
    .not()
    .isEmpty()
    .withMessage('the password not secure'),
  (req, res, next) => {
    validateResult(req, res, next)
  },
]
module.exports = { userValidator }
