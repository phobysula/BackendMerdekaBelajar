const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logbookSchema = new Schema({
    nama_kegiatan: {
        type: String
    },
    NPM: {
        type: String
    },
    NIDN_dosen: {
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
    }
})
module.exports = mongoose.model('logbook', logbookSchema)