const jwt = require('jsonwebtoken'); // imported jwt token for verification.

module.exports = (req, res, next) => {
  //exported middleware function run before protected routes(dashboard)
  // 1. Try cookie first (browser)
  let token = req.cookies?.token; //Tries to read JWT from browser cookies

  // 2. Fallback to header (Postman)
  if (!token && req.headers.authorization) {
    token = req.headers.authorization;
  } //Used for Postman / API clients, Reads token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();//Token is valid, secrete key matches.
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
