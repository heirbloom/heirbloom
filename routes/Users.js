// Routes for /login and /signup go here

const express = require('express');
const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');

const models = require('../database-mysql');
const authenticate = require('../middleware/auth');

const router = express.Router();

// Signup route
router.post('/signup', (req, res) => {
  // extract the login-info out of req.body
  const {
    username, email, password, zipcode,
  } = req.body;
  // if any field is blank, return a 400 error
  if (!username || !email || !password || !zipcode) {
    return res.status(400).json('All fields are required (username, email, passwprd, zipcode)');
  }
  /*  if all fields are input, check the database to see if input username or email already exists;
      destructure Operators (Op) from Sequelize to use 'or' when checking for duplicates */
  const { Op } = Sequelize;
  models.Users.findOne({
    where: {
      [Op.or]: [
        {
          email,
        },
        {
          username,
        }],
    },
  })
    .then((user) => {
      // if the username or email already exists, send a 400 error
      if (user) {
        return res.status(400).json('Username and/or e-mail are already taken. Please select another.');
      }
      // else, if no input fields are duplicates: Encrypt password
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      // re-assign the input password to the encrypted password
      req.body.password = hash;
      // create a new User: input the user-info in the Users model of the database
      models.Users.create(req.body, { fields: ['username', 'email', 'password', 'zipcode', 'regionId'] })
        .then((createdUser) => {
          if (createdUser) {
            /*  if user is created, generate jwt token and send it to the client:
                first parameter is the user's associated info with the encrypted token
                second parameter is the secret used to verify the token later on when the user
                sends it back */
            const token = jwt.sign({ email: createdUser.email }, 'JWT_SECRET');
            return res.status(200).json({ token });
          }
          return res.status(500).json('Something Went wrong');
        })
        .catch((err) => res.json(err));
    });
});

// Login route
router.post('/login', (req, res) => {
  // extract the input login-info from req.body
  const { email, password } = req.body;
  // if either field is empty, return a 400 error
  if (!email || !password) {
    return res.status(400).json('All fields are required (email, password)');
  }
  // else, query the Users table for the user with the input email
  models.Users.findOne({ where: { email } })
    .then((foundUser) => {
      if (!foundUser) {
        return res.status(404).json('User not found');
      }
      // if user is found in db, check the input password against hashed password from the database
      const hashedPassword = foundUser.password;
      if (!bcrypt.compareSync(password, hashedPassword)) {
        // if the passwords don't match, send a 409: Unauthorized error
        return res.status(409).json('Password incorrect!');
      }
      /*  if email and password are correct, generate jwt token and send it to the client;
          first parameter is the user's associated info with the encrypted token
          second param is the secret use to verify the token later on when the user sends it back */
      const token = jwt.sign({ email: foundUser.email }, 'JWT_SECRET');
      return res.status(200).json({ token });
    })
    .catch((err) => res.status(500).json(err));
});

// Private route: route for logged-in user
/*  if user is authenticated with authenticate middleware, req.user (object containing user's info)
    will be available to the next callback */
router.get('/user', authenticate, (req, res) => res.status(200).json(req.user));


module.exports = router;
