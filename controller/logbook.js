const logbook = require('../model/logbook')
const mongoose = require('mongoose')
const objekid = mongoose.Types.ObjectId

exports.insertlogbook = (data) =>
    new Promise((resolve, reject) => {
        logbook.create(data)
            .then(() => {
                resolve({
                    sukses: true,
                    massage: 'berhasil input data logbook'
                })
            }).catch(() => {
                reject({
                    sukses: false,
                    massage: 'gagal input data logbook'
                })
            })
    })

    exports.editData = (id, data) =>
    new Promise((resolve, reject) => {
        logbook.updateOne({
            _id: objekid(id)
        }, data)
            .then(() => {
                resolve({
                    sukses: true,
                    massage: 'berhasil Edit data logbook'
                })
            }).catch(() => {
                reject({
                    sukses: false,
                    massage: 'gagal Edit data logbook'
                })
            })
    })

    exports.getAllData = (nidn) =>
    new Promise((resolve, reject) => {
      logbook.find({
          NIDN_dosen: nidn
      })
        .then(res => {
          resolve({
            sukses: true,
            massage: 'berhasil mnampilkan data logbook',
            data: res
          })
        }).catch(() => {
          reject({
            sukses: false,
            massage: 'gagal menampilkan data logbook',
            data: []
          })
        })
    })

    exports.getById = (_id) =>
    new Promise((resolve, reject) => {
      logbook.findOne({
          _id: objekid(_id)
      })
        .then(res => {
          resolve({
            sukses: true,
            massage: 'berhasil mnampilkan data logbook',
            data: res
          })
        }).catch(() => {
          reject({
            sukses: false,
            massage: 'gagal menampilkan data logbook',
            data: null
          })
        })
    })

    exports.deletedata = (_id) =>
    new Promise((resolve, reject) => {
      logbook.deleteOne({
          _id: objekid(_id)
      })
        .then(() => {
          resolve({
            sukses: true,
            massage: 'berhasil menghapus data logbook'
          })
        }).catch(() => {
          reject({
            sukses: false,
            massage: 'gagal menghapus data logbook'
          })
        })
    })
exports.getlogbookbyMhs = (npm) =>
new Promise((resolve, reject) => {
  logbook.find({
    NPM: npm
  })
    .then((res) => {
      resolve({
        sukses: true,
        massage: 'berhasil memuat data logbook',
        data: res
      })
    }).catch((e) => {
      console.log(e)
      reject({
        sukses: false,
        massage: 'gagal memuat data logbook',
        data: []
      })
    })
})