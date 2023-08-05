const express = require('express');
const router = express.Router();
const users = require('../../models/users');

router.get('/:email/library', (req, res) => {
  const { email } = req.params;

  const user = users.findUserByEmail(email);

  if (user) {
    res.send(user.my_library);
  } else {
    res.status(404).send('User not found');
  }
});

module.exports = router;
