const express = require('express')
const { sequelize, Job, Admin } = require('../../db/models')

const router = express.Router()


router.get('/', async (req, res) => {
    try {
      // const jobs = await Job.findAll();
      const jobs = await sequelize.query('SELECT * FROM "Jobs" WHERE hidden IS NOT true;', {
        type: sequelize.QueryTypes.SELECT,
      })
  
      res.status(200).json(jobs)
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' })
    }
  })
  
  router.get(':id', async (req, res) => {
    try {
      const jobId = req.params.id
      if (isNaN(jobId)) {
        return res.status(400).json({ error: 'Invalid job ID' })
      }
  
      // /jobs/1 OR 1=1
      // /jobs/1 OR 1=1; SELECT * FROM "Admins"
      // /jobs/1 OR 1=1; UPDATE "Admins" SET username = 'admin1' WHERE id = (SELECT id FROM "Admins" LIMIT 1);--
      // const jobs = await Job.findAll();
  
      const job = await sequelize.query(
        `SELECT * FROM "Jobs" WHERE id = ${jobId} AND hidden is not true`,
        {
          type: sequelize.QueryTypes.SELECT,
        }
      )
  
      res.status(200).json(job)
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Something went wrong' })
    }
  })



module.exports = router
