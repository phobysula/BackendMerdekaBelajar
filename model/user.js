const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    NPM: {
        type: String
    },
    Nama: {
        type: String
    },
    Password: {
        type: String
    },
    level: {
        type: Number,
        //level 1=mahasisawa, level 2= admin , level 3=dosen
        default: 1,
    }
})
module.exports = mongoose.model('user', UserSchema)