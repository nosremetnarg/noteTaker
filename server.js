const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const { db } = require('./Develop/db/db');
const router = require('express').Router();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'))
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'))
});


// working route to db.json
app.get('/api', (req, res) => {
    console.log(db);
    res.json(db);

});

// this route takes in a ?query and logs to console
//   app.get('/api', (req, res) => {
//     let results = db;
//     console.log(req.query);
//     res.json(results);
//   });


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});