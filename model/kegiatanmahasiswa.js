const mongoose = require('mongoose')
const Schema = mongoose.Schema
const objekid = mongoose.Schema.ObjectId

const kegiatanmahasiswaSchema = new Schema({
  id_kegiatan: {
    type: objekid
  },
  NPM: {
    type: String
  },
  status: {
    type: Number,
    default: 0
  }
})
module.exports = mongoose.model('kegiatanmahasiswa', kegiatanmahasiswaSchema)