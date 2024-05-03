const express = require('express')
const verifyToken = require('../lib/verifyToken')
const { sequelize, Job, Admin } = require('../../db/models')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.use((req, res, next) => {
  if (req.url === '/login') {
    return next()
  }

  verifyToken(req, res, next)
})

router.get('/', (req, res) => {
  res.send({ status: 1 })
})


// obid prihlasenie DB:   ' OR 1=1--
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const unsafeQuery = `SELECT * FROM "Admins" WHERE username = '${username}' AND password = '${password}'`;

  try {
    const users = await sequelize.query(unsafeQuery, { type: sequelize.QueryTypes.SELECT });

    if (users.length > 0) {
      const user = users[0];
      const token = jwt.sign({ userId: user.id }, 'secretKey', {
        expiresIn: '1h',
      });

      res.json({ token });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('SQL Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/jobs', async (req, res) => {
  console.log('user:');
  console.log(req.user);
  const jobs = await Job.findAll()
  res.status(200).json(jobs)
})

router.put('/jobs/update', async (req, res) => {
  const { id, description } = req.body;

  try {
    const job = await Job.findByPk(id);
    if (job) {
      job.description = description;
      await job.save();
      res.status(200).json({ message: 'Job description updated successfully', job });
    } else {
      res.status(404).json({ error: 'Job not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

router.delete('/jobs/delete', async (req, res) => {
  const { id } = req.body;

  try {
    const result = await Job.destroy({
      where: { id }
    });
    if (result > 0) {
      res.status(200).json({ message: 'Job deleted successfully' });
    } else {
      res.status(404).json({ error: 'Job not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});


module.exports = router
