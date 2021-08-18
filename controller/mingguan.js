const mingguan = require('../model/mingguan')
const mongoose = require('mongoose')
const objekid = mongoose.Types.ObjectId

  exports.insertminggguan = (data) =>
    new Promise((resolve, reject) => {
      mingguan.create(data)
        .then(() => {
          resolve({
            sukses: true,
            massage: 'berhasil input laporan mingguan'
            })
        }).catch(() => {
          reject({
            sukses: false,
            massage: 'gagal input laporan mingguan'
          })
       })
    })

    exports.getAllData = (id_logbook) =>
    new Promise((resolve, reject) => {
      mingguan.find({
        id_logbook: id_logbook
      })
        .then(res => {
          resolve({
            sukses: true,
            massage: 'berhasil menampilkan data laporan mingguan',
            data: res
          })
        }).catch(() => {
          reject({
            sukses: false,
            massage: 'gagal menampilkan data laporan mingguan',
            data: []
          })
        })
      })

      exports.getById = (id) =>
      new Promise((resolve, reject) => {
        mingguan.find({
          _id: objekid(id)
        })
          .then(res => {
            resolve({
              sukses: true,
              massage: 'berhasil mnampilkan data laporan mingguan',
              data: res
            })
          }).catch(() => {
            reject({
              sukses: false,
              massage: 'gagal menampilkan data laporan mingguan',
              data: []
            })
          })
        })
      exports.deletedata = (data) =>
      new Promise((resolve, reject) => {
        mingguan.deleteOne(data)
          .then(() => {
            resolve({
              sukses: true,
              massage: 'berhasil menghapus laporan mingguan'
              })
          }).catch(() => {
            reject({
              sukses: false,
              massage: 'gagal menghapus laporan mingguan'
            })
         })
      })

      exports.getByDosen = (username,npm) =>
        new Promise((resolve, reject) => {
          console.log(username)
          console.log(npm)
          mingguan.aggregate([
            {
              $match: {
                NPM: npm
              }
            },
            {
              $lookup: {
                from: 'kegiatanmahasiswas',
                localField: 'NPM',
                foreignField: 'NPM',
                as: 'kegiatanMhs'
              }
            },
            { $unwind: '$kegiatanMhs'},
            // {
            //   $match: {
            //     'logbook.NIDN_dosen': username
            //   }
            // },
            {
              $lookup: {
                from: 'kegiatanadmins',
                localField: 'kegiatanMhs.id_kegiatan',
                foreignField: '_id',
                as: 'kegiatanDosen'
              }
            },
            { $unwind: '$kegiatanDosen'},
            {
              $match: {
                'kegiatanDosen.username': username
              }
            }
          ])
            .then(res => {
              resolve({
                sukses: true,
                massage: 'berhasil Menampilkan laporan mingguan',
                data: res
              })
            }).catch(() => {
              reject({
                sukses: false,
                massage: 'gagal Menampilkan laporan mingguan',
                data: []
              })
            })
        })

  exports.getByMhs = (npm) =>
        new Promise((resolve, reject) => {
          mingguan.find({
            NPM: npm
          })
            .then(res => {
              resolve({
                sukses: true,
                massage: 'berhasil Menampilkan laporan mingguan',
                data: res
              })
            }).catch(() => {
              reject({
                sukses: false,
                massage: 'gagal Menampilkan laporan mingguan',
                data: []
              })
            })
        })

      exports.evaluasi = (id, data) =>
          new Promise((resolve, reject) => {
            mingguan.updateOne({
              _id: objekid(id)
            },data)
              .then(() => {
                resolve({
                  sukses: true,
                  massage: 'berhasil mengevaluasi laporan mingguan'
                  })
              }).catch(() => {
                reject({
                  sukses: false,
                  massage: 'gagal mengevaluasi laporan mingguan'
                })
              })
          })
