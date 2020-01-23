const express = require('express');
const path = require('path');
const app = express();

const { FRONTEND_APP_PORT } = process.env;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(FRONTEND_APP_PORT, () => {
  console.log(`Running app on port: ${FRONTEND_APP_PORT}`);
});
