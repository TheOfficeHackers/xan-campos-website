const express = require('express');
const router = express.Router();
const { concerts, auth, videos } = require('../controllers/');

router.get('/concerts', concerts.list);
router.post('/concerts', concerts.create);
router.delete('/concerts/:id', concerts.delete);

router.get('/videos', videos.list);
router.post('/videos', videos.create);
router.delete('/videos/:id', videos.delete);

router.get("/profile", auth.profile);
router.post("/register", auth.register);
router.post("/authenticate", auth.authenticate);
router.delete("/logout", auth.logout);



module.exports = router;