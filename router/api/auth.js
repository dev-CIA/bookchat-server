const express = require('express');
const router = express.Router();
const users = require('../../models/users');
const jwt = require('jsonwebtoken');
const verify = require('../../lib/encryption');

router.get('/verify', (req, res) => {
  const accessToken = req.headers.authorization || req.cookies.accessToken;

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    console.log(`😀 사용자 인증 성공`, decoded);

    const user = users.findUserByEmail(decoded.email);
    res.send({ isLogin: true, email: user.email });
  } catch (e) {
    console.log('😱 사용자 인증 실패..', e);
    res.status(401).send({ isLogin: false, error: '😱 사용자 인증 실패..' });
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(401).send({ error: '사용자 아이디 또는 패스워드가 전달되지 않았습니다.' });

  const user = users.findUserByEmail(email);
  if (!user) return res.status(401).send({ error: '잘못된 이메일이나 비밀번호가 입력됐습니다.' });

  const verifiedResult = await verify.verifyPassword(password, user.password.salt, user.password.hashedPassword);
  console.log('[USER]', user.email);

  if (!verifiedResult) return res.status(401).send({ error: '잘못된 이메일이나 비밀번호가 입력됐습니다.' });

  const accessToken = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1d',
  });

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    // sameSite: 'none',
    // secure: true,
  });

  res.send({ email, nickname: user.nickname });
});

router.post('/signup', async (req, res) => {
  const { email, password, nickname } = req.body;

  const user = users.findUserByEmail(email);
  if (user) return res.status(409).send('중복된 이메일이 존재합니다.');

  await users.createUser(email, password);
  const newUser = users.findUserByEmail(email);

  res.send({ email, nickname: newUser.nickname });
});

router.get('/signout', (req, res) => {
  res.clearCookie('accessToken');
  res.send({ isLogin: false });
});

module.exports = router;
