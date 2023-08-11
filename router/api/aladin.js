const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/search', async (req, res) => {
  const params = req.query;

  try {
    const response = await axios.get('http://www.aladin.co.kr/ttb/api/ItemSearch.aspx', {
      params: {
        ...params,
        TTBKey: process.env.ALADIN_TTB_KEY,
      },
    });

    if (response) return res.send(response.data);
  } catch (error) {
    console.log(error);
    return res.status(400).send('api 요청 오류');
  }
});

module.exports = router;
