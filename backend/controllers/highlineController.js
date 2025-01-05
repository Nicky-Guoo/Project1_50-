const axios = require('axios');
const getHighline = async function (req, res) {
  try {
    const url = 'http://localhost:8000/highline';
    const highline = await axios.get(url);
    console.log('highline', highline);
    res.status(200).json({
      msg: 'get highline succeed',
      data: {
        highline: highline.data,
      },
    });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

module.exports = { getHighline };
