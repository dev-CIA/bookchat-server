const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/ai', require('./router/api/openai'));
app.use('/api/auth', require('./router/api/auth'));

app.listen(PORT, () => {
  console.log(`🍭 Server listening at http://localhost:${PORT}`);
});
