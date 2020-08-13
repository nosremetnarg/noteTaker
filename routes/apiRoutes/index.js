const router = require('express').Router();
const path = require('path');
const { db } = require('../../Develop/db/db');

// working on post routes

// router.post('/notes', (req, res) => {
//     // req.body is where our incoming content will be
//     let results = db;
//     if (req.body) {
//         console.log(results);
//         res.json(results);
//     }
//     else {
//         res.send(404);
//     }
// });






module.exports = router;

// app.get('/api', (req, res) => {
//     //     console.log(db);
//     //     res.json(db);