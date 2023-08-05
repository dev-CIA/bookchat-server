const express = require('express');
const router = express.Router();
const users = require('../../models/users');
const jwt = require('jsonwebtoken');

router.get('/verify', (req, res) => {
  const accessToken = req.headers.authorization || req.cookies.accessToken;

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    console.log(`😀 사용자 인증 성공`, decoded);

    const user = users.findUserByEmail(decoded.email);
    res.send({ isLogin: true, email: user.email, nickname: user.nickname, my_library: user.my_library });
  } catch (e) {
    console.log('😱 사용자 인증 실패..', e);
    res.send({ isLogin: false });
    res.sendStatus(401);
  }
});
