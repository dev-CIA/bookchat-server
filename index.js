const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/ai', require('./router/api/openai'));

app.listen(PORT, () => {
  console.log(`🍭 Server listening at http://localhost:${PORT}`);
});
