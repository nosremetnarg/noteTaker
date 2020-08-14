const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const { db } = require('./db/db'); // maybe these are duplicates
const router = require('express').Router();
// const { notes } = require('./Develop/db/dataBase'); // maybe these are duplicates

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));


//=================== these routes work
// // gets index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});
// // gets notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

// ============================
// working route to db.json
app.get('/api', (req, res) => {
    console.log(db);
    res.json(db);

});
//=============code from jon
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + '../../Develop/public/index.html'));
// })
// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname + '../../Develop/public/notes.html'));
// })
// ================= code from jon

// // successfully sends json via POST request
app.post('/api', (req, res) => {
    console.log(db);
    res.json(db);
});

// successfully sends a post request
app.post('/', function (req, res) {
    res.send('Got a POST request on index')
  })
//============================================
app.post('/notes', function (req, res) {
    res.send('Got a POST request on notes page')
  })
// this route takes in a ?query and logs to console
//   app.get('/api', (req, res) => {
//     let results = db;
//     console.log(req.query);
//     res.json(results);
//   });
//==========================================

// redoing the module
// route to api database
app.get('/api/db', (req, res) => {
  res.json(db);
});


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});