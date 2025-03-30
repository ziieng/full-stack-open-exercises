const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const blogsRouter = require('./controllers/blogs')

const mongoUrl = config.MONGODB_URI

// I don't want to log the password, so find the @ to get where it's safe to log.
const urlAtPoint = mongoUrl.indexOf('@')
logger.info('connecting to MongoDB url: ...', mongoUrl.substring(urlAtPoint))

mongoose.connect(mongoUrl)
.then(() => {
  logger.info('connected to MongoDB')
})
.catch((error) => {
  logger.error('error connecting to MongoDB:', error.message)
})


app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter)

module.exports = app