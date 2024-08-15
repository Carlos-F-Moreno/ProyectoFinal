const bcrypt = require('bcrypt')

async function encrypt (plain) {
  return await bcrypt.hash(plain, 10)
}
module.exports = encrypt