const kegiatanadmin = require('../model/kegiatanadmin')
const mongoose = require('mongoose')
const objekid = mongoose.Types.ObjectId

exports.insert = (data) =>
  new Promise((resolve, reject) => {
    kegiatanadmin.findOne({
      username: data.username
    }).then(adaUser => {
      if (adaUser) {
        resolve({
          sukses: false,
          massage:'username sudah terdaftar'
        })
      } else {
        kegiatanadmin.create(data)
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

  exports.getAll = () =>
    new Promise((resolve, reject) => {
      kegiatanadmin.aggregate([
        {
          $lookup: {
            from: 'logins',
            localField: 'username',
            foreignField: 'username',
            as: 'dataDosen'
          }
        },
        {
          $unwind: '$dataDosen'
        }
      ])
        .then(res => {
          resolve({
            sukses: true,
            massage: 'berhasil get data kegiatan',
            data: res
          })
        }).catch(() => {
          reject({
            sukses: false,
            massage: 'gagal get data kegiatan',
            data: []
          })
        })
    })