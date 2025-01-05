const axios = require('axios');

const getCard = async function (req, res) {
  const id = req.query.id;
  console.log('id', id);
  const url = 'http://localhost:8000/cards?id=' + id;
  try {
    const cards = await axios.get(url);
    console.log('cards', cards.data);
    res.status(200).json({
      msg: 'get cards succeed',
      data: cards.data,
    });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

const postCard = async function (req, res) {
  console.log('body', req.body);
  const data = req.body;
  const url = 'http://localhost:8000/cards';
  try {
    await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    res.status(200).json({
      msg: 'Card is created',
    });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

const deleteCard = async function (req, res) {
  const id = req.params.card_id;
  const url = 'http://localhost:8000/cards/' + id;
  try {
    const result = await axios.delete(url);
    console.log('result', result);
    res.status(200).json({
      msg: 'Card is deleted',
    });
  } catch (error) {
    res.send(500).send('Server Error');
  }
};
module.exports = { getCard, postCard, deleteCard };
