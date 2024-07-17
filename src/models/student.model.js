const { Schema, model } = require('mongoose')

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required:true,
  },
  attendance: {
    type: Map,
    of: String,
  },
  course: {
    type: String,
    required: true,
  },
  year_of_entry: {
    type: String,
    required: true,
    default: Date.now
  },
  Subjects: [
    {
      type: String,
    },
  ],
  notes:[{
    type: Schema.ObjectId,
    ref:'Note'
  }],
  userId:{
    type:Schema.ObjectId,
    ref:'User'
  }
})

module.exports = model('student', StudentSchema)
