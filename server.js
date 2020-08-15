const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const  db  = require('./db/db'); // maybe these are duplicates
const router = require('express').Router();
const uuid = require('uuid/v1')
// const { notes } = require('./Develop/db/dataBase'); // maybe these are duplicates

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));


//====================================
// // gets index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});
// // gets notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});
//====================================

// working route to db.json
app.get('/api/notes', (req, res) => {
  console.log(db);
  res.json(db);
});

// write note
app.post('/api/notes', (req, res) => {
  console.log(db);
  //add the ID property
  const newNote = req.body
  newNote.id = uuid()
  console.log(newNote + "this is a new note");
  db.push(req.body);
  fs.writeFile('db/db.json', JSON.stringify(db), function(err, data){
      if (err) {
          throw err
      } else {
          res.send(data)
      }
  });
});



//============================================
app.post('/notes', function (req, res) {
    res.send('Got a POST request on notes page')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});