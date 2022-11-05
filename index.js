const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

const courses = require('./data.json');

app.get ('/', (req, res) =>{
  res.send('server is running')
});
