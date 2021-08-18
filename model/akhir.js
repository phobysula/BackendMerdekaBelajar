const mongoose = require('mongoose')
const Schema = mongoose.Schema
const objekid = mongoose.Schema.ObjectId

const akhirSchema = new Schema({
  nama_kegiatan: {
    type: String
  },
  id_logbook: {
    type: objekid
  },
  NPM: {
    type: String
  },
  laporan: {
      type: String
    }
})
module.exports = mongoose.model('akhir', akhirSchema)