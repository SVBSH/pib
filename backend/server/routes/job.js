const express = require('express')
const { sequelize, Job, Admin } = require('../../db/models')

const router = express.Router()


router.get('/', async (req, res) => {
    try {
      const jobs = await Job.findAll();
  
      res.status(200).json(jobs)
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' })
    }
  })
  
  router.get('/:id', async (req, res) => {
    try {
      const jobId = req.params.id
      if (isNaN(jobId)) {
        return res.status(400).json({ error: 'Invalid job ID' })
      }
  
      const jobs = await Job.findAll();
      
      res.status(200).json(jobs)
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Something went wrong' })
    }
  })



module.exports = router
