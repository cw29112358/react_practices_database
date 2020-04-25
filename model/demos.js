const mongoose = require('mongoose')
const Schema = mongoose.Schema
const options = require('./schemaOptions')

const demosSchema = new Schema(
  {
    name: String
  },
  options,
)

const demos = mongoose.model('demo', demosSchema)

module.exports = demos
