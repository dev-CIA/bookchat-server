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
    res.sendStatus(401).send({ isLogin: false, error: '😱 사용자 인증 실패..' });
  }
});

router.post('/signin', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(401).send({ error: '사용자 아이디 또는 패스워드가 전달되지 않았습니다.' });

  const user = users.findUser(email.password);
  console.log('[USER]', user);

  if (!user) return res.status(401).send({ error: '등록되지 않은 사용자입니다.' });

  const accessToken = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1d',
  });

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });

  res.send({ email, nickname });
});
