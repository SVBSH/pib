const express = require('express')
require('dotenv').config()

const { sequelize, Job } = require('../db/models/index.js')

const app = express()
const SERVER_PORT = process.env.SERVER_PORT || 3000
const SERVER_IP = process.env.SERVER_IP || 'localhost'

app.use(express.json())

// register routes
app.use('/admin', require('./routes/admin.js'));
app.use('/jobs', require('./routes/job.js'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/testdb', async (req, res) => {
  try {
    await sequelize.authenticate()

    res.send('Connection has been established successfully.')
  } catch (error) {
    res.status(500).send('Unable to connect to the database:', error)
  }
})

app.listen(SERVER_PORT, async () => {
  console.log(`Server running on http://${SERVER_IP}:${SERVER_PORT}`)
  try {
    await sequelize.authenticate()
    console.log('Database connected!')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})

