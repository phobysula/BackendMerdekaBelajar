const akhir = require('../model/akhir')
const objekid = require('mongoose').Types.ObjectId

exports.insertakhir = (data) =>
    new Promise((resolve, reject) => {
      akhir.create(data)
              .then(() => {
                resolve({
                  sukses: true,
                  massage: 'berhasil input laporan akhir'
                  })
              }).catch((e) => {
                reject({
                  sukses: false,
                  massage: 'gagal input laporan akhir'
                })
            })
          })
          
          exports.getbymhs = (npm) =>
          new Promise((resolve, reject) =>{
            akhir.find({
              NPM : npm
            }).then(res=>{
              resolve({
                sukses : true,
                message : 'berhasil',
                data : res
              })
            })
          }) 
    exports.getById = (username,npm) =>
    new Promise((resolve, reject) => {
      akhir.aggregate([
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
            massage: 'berhasil mnampilkan data laporan akhir',
            data: res
          })
        }).catch(() => {
          reject({
            sukses: false,
            massage: 'gagal menampilkan data laporan akhir',
            data: []
          })
        })
      })