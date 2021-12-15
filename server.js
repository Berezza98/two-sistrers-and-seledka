require('dotenv').config();
const express = require('express');
const { sendMessage } = require('./telegram');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bot is still running!');
});

app.post('/', async (req, res) => {
  const body = req.body;
  console.log(body);
  await sendMessage(JSON.stringify(body));
  res.send('OK');
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(process.env.PORT);
