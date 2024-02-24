const { Schema, model, mongo } = require('mongoose')

const StudentsSchema = new Schema(
  {
    attendance: {
      type: Map,
      of: String,
      default: {}
    },
    name: {
      type: String,
      required: true
    },
    course: {
      type: String,
      required: true
    },
    profileId: {
      type: mongo.ObjectId
    },
    last_name: {
      type: String,
      required: true
    },
    year: {
      type: Date,
      required: true
    },
    subjects: {
      type: [String],
      default: ['Math', 'Science', 'langue']
    }

  })
module.exports = model('Students', StudentsSchema)
