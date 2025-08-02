const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const filePath = path.join('/data', 'message.txt');
  const message = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : 'Hello from Node.js!';
  res.send(`<h1>${message}</h1>`);
});

app.listen(port, () => {
  console.log(`Node.js app listening on port ${port}`);
});
