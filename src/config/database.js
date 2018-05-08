const mongoose = require('mongoose')
// Config para usar Promise do node mongoose.Promise está depreciada
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost:27017/todo')