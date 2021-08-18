const evaluasimingguanModel = require('../model/evaluasimingguan')

exports.insertevaluasimingguan = (data) =>
  new Promise((resolve, reject) => {
    evaluasimingguanModel.create(data)
      .then(() => {
        resolve({
          sukses: true,
          massage: 'berhasil input evaluasi mingguan'
        })
      }).catch(() => {
        reject({
          sukses: false,
          massage: 'gagal input evaluasi mingguan'
        })
      })
  })