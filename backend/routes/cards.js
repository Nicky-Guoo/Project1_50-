const express = require('express');
const axios = require('axios');
const { getCard } = require('../controllers/cardsController');
const { postCard } = require('../controllers/cardsController');
const { deleteCard } = require('../controllers/cardsController');
const cardsRouter = express.Router();
// get cards by user id
//api http://localhost/api/cards?id=1     自己写的api
//json http://localhost:8000/cards?id=1   json提供的api
cardsRouter.get('/', getCard);

// post cards to the user
// api http://localhost/api/cards
//json http://localhost:8000/cards
cardsRouter.post('/', postCard);

// delete a card by card id
//api http://localhost/api/cards/:card_id
//动态参数用这个api localhost/api/cards/5
cardsRouter.delete('/:card_id', deleteCard);

module.exports = cardsRouter;
