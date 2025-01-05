const express = require('express');
const axios = require('axios');
const requestRouter = express.Router();
const { getRequest } = require('../controllers/requestController');
// get request
requestRouter.get('/', getRequest);

module.exports = requestRouter;
