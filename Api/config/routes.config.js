const express = require('express');
const router = express.Router();
const concerts = require('../controllers/concerts.controller.js');

router.get('/concerts', concerts.list);
router.post('/concerts', concerts.create);
router.delete('/concerts/:id', concerts.delete);


module.exports = router