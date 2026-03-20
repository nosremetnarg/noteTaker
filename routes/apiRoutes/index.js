const router = require('express').Router();
const noteRoutes = require('../apiRoutes/notes');

router.use(noteRoutes);

module.exports = router;