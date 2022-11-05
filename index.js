const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

const courses = require('./data.json');

app.get ('/', (req, res) =>{
  res.send('server is running')
});

app.get ('/courses', (req, res) => {
     res.send(courses)
 });
 
 app.get('/courses/:id', (req, res) =>{
      const id = parseInt(req.params.id);
      console.log('looking for data for id', id);
      const course = courses.find((course) => course.id === id )
       res.send(course);
 });
