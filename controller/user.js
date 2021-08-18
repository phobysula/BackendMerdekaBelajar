const userModel = require('../model/user')

exports.insertUser = (data) =>
    new Promise((resolve, reject) => {
        userModel.create(data)
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
        userModel.find()
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
        userModel.updateOne({
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
exports.getById = (npm) =>
    new Promise((resolve, reject) => {
        userModel.findOne({
            NPM: npm
        }).then((res) => {
            resolve({
                sukses: true,
                massage: 'berhasil menampilkan data',
                data: res
            })
        }).catch(() => {
            reject({
                sukses: false,
                massage: 'gagal menampilkan data',
                data: null
            })
        })
    })

exports.deletedata = (npm) =>
    new Promise((resolve, reject) => {
        userModel.deleteOne({
            NPM: npm
        }).then(() => {
            resolve({
                sukses: true,
                massage: 'berhasil menghapus',
            })
        }).catch(() => {
            reject({
                sukses: false,
                massage: 'gagal ,mnghapus data'
            })
        })
    })
