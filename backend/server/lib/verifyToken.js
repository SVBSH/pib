const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization']
  if (!bearerHeader) {
    return res.status(403).json({ message: 'Token is required' })
  }
  const token = bearerHeader.split(' ')[1] 

  if (!token) {
    return res.status(403).json({ message: 'Token is required' })
  }

  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' })
    }
    req.user = decoded
    next()
  })
}


module.exports = verifyToken
