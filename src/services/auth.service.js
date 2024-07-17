const User = require('../models/user.model')
const { encrypt } = require('../utils/bcrypt_text.js')

async function register(info) {
  try {
    console.log(info)
    info.password = await encrypt(info.password)
    console.log(info.password)
    const user = await User.create(info)
    console.log(user)
    return user
  } catch (error) {
    console.error(error)
  }
}
module.exports = {
  register
}
