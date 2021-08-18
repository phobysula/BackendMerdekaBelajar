const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lihatdataSchema = new Schema({
  NPM: {
    type: String
  },
  Nama: {
    type: String
  },
  Pembimbing: {
    type: String
  },
  email: {
    type: String
  },
  Jenis_kegiatan: {
    type: String
  },
})
module.exports = mongoose.model('lihatdata', lihatdataSchema)