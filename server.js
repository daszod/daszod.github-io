const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;


const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(5000);
