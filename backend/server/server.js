const express = require('express')
require('dotenv').config()
var cors = require('cors')


const { sequelize, Job } = require('../db/models/index.js')

const app = express()
const SERVER_PORT = process.env.SERVER_PORT || 4000
const SERVER_IP = process.env.SERVER_IP || 'localhost'
app.use(cors());
app.use(express.json())

// register routes
app.use('/admin', require('./routes/admin.js'));
app.use('/jobs', require('./routes/job.js'))
app.use('/test', require('./routes/test.js'))

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

