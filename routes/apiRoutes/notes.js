const router = require('express').Router();
const path = require('path');
const db  = require('../../db/db'); 
const uuid = require('uuid/v1');
const fs = require('fs');



// route to load notes from db
// router.get('../../../api/notes', (req, res) => {
//     console.log(db);
//     res.json(db);
//   });

module.exports = router;

