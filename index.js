const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

app.use(cors())
const directory = path.join(__dirname, '/statics/')
app.use(express.static(directory))
app.use(bodyParser.json({
    extended: true,
    limit: '20mb'
}))

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '20mb'
}))

const mongoURL = 'mongodb://localhost:27017/merdekabelajar'
mongoose.connect(mongoURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('bismillah berhasil konek ke database')
}).catch(() => {
    console.log('astagfirullah gagal konek ke database')
})

app.use('/user', require('./routes/user'))
app.use('/logbook', require('./routes/logbook'))
app.use('/inputnilai', require('./routes/inputnilai'))
app.use('/lihatdata', require('./routes/lihatdata'))
app.use('/mingguan', require('./routes/mingguan'))
app.use('/user', require('./routes/login'))
app.use('/akhir', require('./routes/akhir'))
app.use('/kegiatanadmin', require('./routes/kegiatanadmin'))
app.use('/kegiatanmahasiswa', require('./routes/kegiatanmahasiswa'))

app.listen(5000, () => {
    console.log('Alhamdulillah server sudah berjalan')
})
