const mongoose = require('mongoose')
const Schema = mongoose.Schema

const loginSchema = new Schema({
  nama: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  level: {
    type: Number,
    //level 1=mahasisawa, level 2= admin , level 3=dosen
    default: 1,
  }
})
module.exports = mongoose.model('login', loginSchema)