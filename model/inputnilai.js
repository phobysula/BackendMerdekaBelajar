const mongoose = require('mongoose')
const Schema = mongoose.Schema
const objekid = mongoose.Schema.objectId

const nilaiSchema = new Schema({
    NPM: {
        type: String
    },
    nama_kegiatan: {
        type: String
    },
    NIDN_dosen: {
        type: String
    },
    Nilai_skill: { //free form= laporan dikonversi ke mata kuliah , blended form (structure form)= laporan dikoversi menjadi skills  
        type: String
    },
    Nilai_matakuliah: {
        type: String
    },
    File: {
          type: String
    }
})
module.exports = mongoose.model('nilai', nilaiSchema)