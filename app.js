var express = require('express');
const path = require('path');

var app = express(); // create an object of express module

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname, 'index.html');
});

const port = 3000;
app.listen(port, function () {
  console.log(`API running on port ${port}`);
});
