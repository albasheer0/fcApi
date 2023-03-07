const mongoose = require('mongoose')
const loadModels = require('../models')

const DB_URL = process.env.dbUrl

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepAlive: true,
    })
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error('Failed to connect to MongoDB', err)
  }
}

mongoose.connection.on('error', console.error)
mongoose.connection.on('disconnected', connectDB)

loadModels()

module.exports = connectDB
