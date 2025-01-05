const axios = require('axios');
const getProfile = async function (req, res) {
  try {
    const url = 'http://localhost:8000/profile';
    const profile = await axios.get(url);
    res.status(200).json({
      msg: 'get profile succeed',
      data: {
        profile: profile.data,
      },
    });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

module.exports = { getProfile };
