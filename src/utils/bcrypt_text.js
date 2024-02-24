const bcrypt = require('bcrypt')

async function encrypt (plain) {
  return await bcrypt.hash(plain, 10)
}
async function compare (plain, encrypted) {
  return await bcrypt.compare(plain, encrypted)
}
module.exports = { encrypt, compare }
