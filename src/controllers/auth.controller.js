const authServices = require('../services/auth.service.js')

const login = async (req, res) => {
  try {
    const response = 'success'
    res.render('index', response)
  } catch (error) {
    res.render('error')
  }
}
const register = async (req, res) => {
  try {
    const response = 'success'
    res.render('index', response)
  } catch (error) {
    res.render('error')
  }
}
module.exports = {
  login,
  register
}
