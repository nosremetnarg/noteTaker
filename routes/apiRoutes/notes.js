const router = require('express').Router();
const path = require('path');
// const { notes } = require('db/db.json');
// const { db } = require('./db/db'); // maybe these are duplicates

// const { createNewNote } = require('./lib/notes.js');

// working on post routes

// router.get('/notes', (req, res) => {
//     // req.body is where our incoming content will be
//     let result = notes;
//     if (req.query) {
//         result;
//     }
//     res.json(result);
// });

// router.post('/notes', (req, res) => {
//     // req.body is where our incoming content will be
//     req.body = notes.length.toString();
//     const note = createNewNote(req.body, notes);
//     res.json(note);
// });


module.exports = router;

// app.get('/api', (req, res) => {
//     //     console.log(db);
//     //     res.json(db);