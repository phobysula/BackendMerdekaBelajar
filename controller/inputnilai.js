const nilaiModel = require('../model/inputnilai')
const objekid = require('mongoose').Types.ObjectId

exports.insertnilai = (data) =>
    new Promise((resolve, reject) => {
        nilaiModel.create(data)
            .then(() => {
                resolve({
                    sukses: true,
                    massage: 'berhasil input data mahasiswa'
                })
            }).catch(() => {
                reject({
                    sukses: false,
                    massage: 'gagal input data mahasiswa'
                })
            })
    })
exports.getAllData = () =>
    new Promise((resolve, reject) => {
        nilaiModel.find()
            .then(res => {
                resolve({
                    sukses: true,
                    massage: 'berhasil mnampilkan data',
                    data: res
                })
            }).catch(() => {
                reject({
                    sukses: false,
                    massage: 'gagal menampilkan data',
                    data: []
                })
            })
    })

exports.editData = (npm, data) =>
    new Promise((resolve, reject) => {
        nilaiModel.updateOne({
            NPM: npm
        }, data).then(() => {
            resolve({
                sukses: true,
                massage: 'berhasil updat data'
            })
        }).catch(() => {
            reject({
                sukses: false,
                massage: 'gagal update data'
            })
        })
    })
    exports.getById = (id) =>
    new Promise((resolve, reject) => {
        // console.log(id)
      nilaiModel.aggregate([
        // {
        //   $lookup: {
        //     from: 'mingguans',
        //     localField: 'NPM',
        //     foreignField: 'NPM',
        //     as: 'mingguan'
        //   }
        // },
        // { $unwind: '$mingguan'},
        {
          $match: {
            'NPM': id
          }
        },
        {
          $lookup: {
            from: 'logins',
            localField: 'NPM',
            foreignField: 'username',
            as: 'mhs'
          }
        },
        { $unwind: '$mhs'}
      ])
        .then(res => {
            // console.log(res)
          resolve({
            sukses: true,
            massage: 'berhasil mnampilkan nilai',
            data: res
          })
        }).catch(() => {
          reject({
            sukses: false,
            massage: 'gagal menampilkan nilai',
            data: []
          })
        })
      })

exports.deletedata = (npm) =>
    new Promise((resolve, reject) => {
        nilaiModel.deleteOne({
            NPM: npm
        }).then(() => {
            resolve({
                sukses: true,
                massage: 'berhasil menghapus data',
            })
        }).catch(() => {
            reject({
                sukses: false,
                massage: 'gagal ,mnghapus data'
            })
        })
    })


exports.getByNPM = (npm) =>
    new Promise((resolve, reject) => {
        nilaiModel.find({
            NPM: npm
        }).then(res => {
            resolve({
                sukses: true,
                message: 'Berhasil',
                data: res
            })
        })
    })