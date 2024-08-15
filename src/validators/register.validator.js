const { body, validationResult } = require('express-validator')

const userValidator = [
  body('dni')
  .exists()
  .isNumeric()
  .withMessage('D.N.I is required'),
  body('password')
    .exists()
    .isLength({ min: 8 })
    .withMessage('Password should be at least 8 chars'),
  (req, res, next) => {
    try {
      validationResult(req).throw()
      return next()
    } catch (err) {
      let errors = err.formatWith(error => error.msg).mapped()
      res.render('register', {errors})
    }
  },
]
module.exports = { userValidator }
