const jwt = require('jsonwebtoken');
const { Users } = require('../database-mysql');

const authenticate = (req, res, next) => {
  // get the token from the user
  const token = req.body.token || req.query.token || req.header('X-TOKEN');
  // if the user doesn't have a token:
  if (!token) {
    return res.status(401).json('Unauthorized: Provide token to access this route');
  }
  // else, verify the user
  jwt.verify(token, 'JWT_SECRET', (error, decoded) => {
    // if there's an error, send a 401
    if (error) {
      return res.status(401).json('Unauthorized: Token is invalid');
    }
    // else, query the database for the decoded user
    Users.findOne({ where: { email: decoded.email } })
      .then((foundUser) => {
        // if decoded user is not found, send a 401
        if (!foundUser) {
          return res.status(401).json('Unauthorized: User with this token is not in the database');
        }
        // if user found, attach verified info to the req.body so user can access any private route
        req.user = {
          email: foundUser.email,
          zipcode: foundUser.zipcode,
          username: foundUser.username,
        };
        // move on to the next controller/middleware/function in line
        return next();
      })
      .catch(() => res.status(401).json('Unauthorized: something went wrong'));
  });
};

module.exports = authenticate;
