const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const { db } = require('./db/db'); // maybe these are duplicates
const router = require('express').Router();
const uuid = require('uuid/v1')
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));


//====================================
// // loads index page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});
// // loads notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'))
});
//====================================

// route to load notes from db
app.get('/api/notes', (req, res) => {
  // console.log(db);
  res.json(db);
});

// write note function 
app.post('/api/notes', (req, res) => {
  // console.log(db);
  //add the ID property
  const newNote = req.body
  newNote.id = uuid()
  // console.log(newNote);
  const note = req.body
  db.push(note);
  fs.writeFile('db/db.json', JSON.stringify({ db }, null, 2), function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  });
});

function findById(id, db) {
  const result = db.filter(note => note.id === id)[0];
  // console.log(result);
  return result;
}

app.delete('/api/notes/:id', (req, res) => {
  const result = findById(req.params.id, db)
  console.log(result);
  const index = (db.indexOf(result));
  console.log(index);
  db.splice(index ,1);
  fs.writeFile('db/db.json', JSON.stringify({ db }, null, 2), function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  });
});
// route to delete a note
// app.delete('/api/notes/:id', (req, res) => {
//   const result = findById(req.params.id, db)
//   console.log(result);
//   if (result) {
//     res.json(result);
//   } else {
//     res.sendStatus(404);
//   }
//   // res.send({type:'DELETE'});
// });

//============================================

// catch-all route for initial visitors
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});