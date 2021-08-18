const login = require('../model/login')
const bcrypt = require('bcrypt')

exports.insertUser = (data) =>
  new Promise((resolve, reject) => {
    login.findOne({
      username: data.username
    }).then(adaUser => {
      if (adaUser) {
        resolve({
          sukses: false,
          massage: 'username sudah terdaftar'
        })
      } else {
        bcrypt.hash(data.password, 10, (err, hash) => {
          data.password = hash
          login.create(data).then(() => {
            resolve({
              sukses: true,
              massage: 'berhasil registrasi'
            })
          }).catch(() => {
            reject({
              sukses: false,
              massage: 'gagal registrasi'
            })
          })
        })
      }
    })
  })

exports.login = (data) =>
  new Promise((resolve, reject) => {
    login.findOne({
      username: data.username
    }).then(adaUser => {
      if (adaUser) {
        if (bcrypt.compareSync(data.password, adaUser.password)) {
          resolve({
            sukses: true,
            massage: 'berhasil login,',
            data: adaUser
          })
        } else {
          reject({
            sukses: false,
            massage: 'Password anda salah'
          })
        }
      } else {
        reject({
          sukses: false,
          massage: 'username tidak terdaftar'
        })
      }
    })
  })
exports.getAllData = () =>
  new Promise((resolve, reject) => {
    login.find()
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

exports.getAllDosen = () =>
  new Promise((resolve, reject) => {
    login.find({
      level: 3
    })
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