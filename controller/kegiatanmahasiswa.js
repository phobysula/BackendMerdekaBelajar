const kegiatanmahasiswa = require('../model/kegiatanmahasiswa')
const kegiatanAdmin = require('../model/kegiatanadmin')
const mongoose = require('mongoose')
const kegiatanadmin = require('../model/kegiatanadmin')
const objekid = mongoose.Types.ObjectId

exports.insert = (data) =>
  new Promise((resolve, reject) => {
    kegiatanmahasiswa.findOne({
      NPM: data.NPM
    }).then(adaKegiatan => {
      if (adaKegiatan) {
        reject({
          sukses: false,
          massage: 'Anda sudah input data kegiatan'
        })
      }else{
        kegiatanmahasiswa.create(data)
          .then(() => {
            resolve({
              sukses: true,
              massage: 'berhasil input data kegiatan'
            })
          }).catch(() => {
            reject({
              sukses: false,
              massage: 'gagal input data kegiatan'
            })
          })
      }
    })
  })
exports.getKegiatanByDosen = (username) =>
  new Promise((resolve, reject) => {
      kegiatanadmin.aggregate([
        {
          $match: {
            username: username
          }
        },
        {
          $lookup: {
            from: 'kegiatanmahasiswas',
            localField: '_id',
            foreignField: 'id_kegiatan',
            as: 'mahasiswa'
          }
        },
        { $unwind: '$mahasiswa' },
        {
          $lookup: {
            from: 'logins',
            localField: 'mahasiswa.NPM',
            foreignField: 'username',
            as: 'detailMahasiswa'
          }
        },
        { $unwind: '$detailMahasiswa' },
    ])
          .then((res) => {
              resolve({
                  sukses: true,
                  massage: 'berhasil menampilkan data kegiatan',
                  data: res
              })
          }).catch((e) => {
            console.log(e)
              reject({
                  sukses: false,
                  massage: 'gagal menampilkan data kegiatan',
                  data: []
              })
          })

  })

exports.getKegiatanByDosenConfirmed = (username) =>
  new Promise((resolve, reject) => {
      kegiatanadmin.aggregate([
        {
          $match: {
            username: username
          }
        },
        {
          $lookup: {
            from: 'kegiatanmahasiswas',
            localField: '_id',
            foreignField: 'id_kegiatan',
            as: 'mahasiswa'
          }
        },
        { $unwind: '$mahasiswa' },
        {
          $match: {
            'mahasiswa.status': 1
          }
        },
        {
          $lookup: {
            from: 'logins',
            localField: 'mahasiswa.NPM',
            foreignField: 'username',
            as: 'detailMahasiswa'
          }
        },
        { $unwind: '$detailMahasiswa' },
    ])
          .then((res) => {
              resolve({
                  sukses: true,
                  massage: 'berhasil menampilkan data kegiatan',
                  data: res
              })
          }).catch((e) => {
            console.log(e)
              reject({
                  sukses: false,
                  massage: 'gagal menampilkan data kegiatan',
                  data: []
              })
          })

  })

  exports.konfirmasiKegiatan = (id) =>
  new Promise((resolve, reject) => {
    kegiatanmahasiswa.updateOne({
      _id: objekid(id)
    },{
      status:1
    }).then(()=>{
      resolve({
        sukses: true,
        massage: 'Berhasil Mengkonfirmasi kegiatan'
      })
    }).catch(() => {
      reject({
        sukses: false,
        massage: 'Gagal Mengkonfirmasi kegiatan'
      })
    })
  })

  exports.getKegiatanByMahasiswa = (npm) =>
  new Promise((resolve, reject) => {
      kegiatanmahasiswa.aggregate([
        {
          $match: {
            NPM: npm
          }
        },
        {
          $lookup: {
            from: 'kegiatanadmins',
            localField: 'id_kegiatan',
            foreignField: '_id',
            as: 'detailKegiatan'
          }
        },
        { $unwind: '$detailKegiatan' },
        {
          $lookup: {
            from: 'logins',
            localField: 'detailKegiatan.username',
            foreignField: 'username',
            as: 'detailDosen'
          }
        },
        { $unwind: '$detailDosen' },
    ])
          .then((res) => {
              resolve({
                  sukses: true,
                  massage: 'berhasil menampilkan data kegiatan',
                  data: res
              })
          }).catch((e) => {
            console.log(e)
              reject({
                  sukses: false,
                  massage: 'gagal menampilkan data kegiatan',
                  data: []
              })
          })

  })