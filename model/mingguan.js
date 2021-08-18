const mongoose = require('mongoose')
const Schema = mongoose.Schema
const objekid = mongoose.Schema.ObjectId

const mingguanSchema = new Schema({
  nama_kegiatan: {
      type: String
    },
  id_logbook: {
      type: objekid
  },
  NPM: {
      type: String
  },
  Deskripsi: {
      type: String
    },
  waktu_mulai_pelaksanaan: {
      type: Date
  },
  waktu_selesai_pelaksanaan: {
      type: Date
  },
  target_kegiatan: {
      type: String
    },
  Keterangan: {
      type: String
  },
  evaluasi: {
      type: String,
      default: null
  },
  image: [
    {
      filename: String
    }
  ]
})
module.exports = mongoose.model('mingguan', mingguanSchema)