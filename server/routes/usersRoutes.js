//Eternal imports
const express = require('express');

//Variable delarations
const route = express.Router();

route.use(express.json());

const usersControllers = require('../controllers/usersControllers.js');
const authControllers = require('../controllers/authControllers.js');

route.post('/signup', authControllers.signup);
route.post('/login', authControllers.login);

route.route('/').get(authControllers.protect, authControllers.restrictTo('Admin'), usersControllers.getAllUsers);
route.route('/me').get(authControllers.protect, usersControllers.getMe, usersControllers.getSingleUser);
route.route('/updateMe').patch(authControllers.protect, usersControllers.updateMe);
route.route('/deleteMe').delete(authControllers.protect, usersControllers.deleteMe);

module.exports = route;