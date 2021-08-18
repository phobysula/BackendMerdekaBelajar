const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kegiatanadminSchema = new Schema({
  nama_kegiatan: {
    type: String
  },
  Deskripsi: {
    type: String
  },
  username: {
    type: String
  }
})
module.exports = mongoose.model('kegiatanadmin', kegiatanadminSchema)