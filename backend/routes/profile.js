const express = require('express');
const axios = require('axios');
const profileRouter = express.Router();
const { getProfile } = require('../controllers/profileController');

// get profile
profileRouter.get('/', getProfile);

module.exports = profileRouter;
