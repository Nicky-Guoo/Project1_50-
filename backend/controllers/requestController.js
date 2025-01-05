const axios = require('axios');
const getRequest = async function (req, res) {
  try {
    const url = 'http://localhost:8000/request';
    const request = await axios.get(url);
    res.status(200).json({
      msg: 'get request succeed',
      data: {
        request: request.data,
      },
    });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

module.exports = { getRequest };
