function parserMongoObjects (mongoObjet) {
  const parseMongoObject = JSON.parse(JSON.stringify(mongoObjet))
  return parseMongoObject
}
module.exports = parserMongoObjects
