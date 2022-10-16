const express = require('express');
const router = express.Router();
const { concerts, auth, videos, works, colabos, message} = require('../controllers/');
const secure = require("../middleware/secure.mid");


router.get('/concerts', concerts.list);
router.post('/concerts', secure.isAuthenticated, concerts.create);
router.delete('/concerts/:id', secure.isAuthenticated, concerts.delete);

router.get('/videos', videos.list);
router.post('/videos', secure.isAuthenticated, videos.create);
router.delete('/videos/:id', secure.isAuthenticated, videos.delete);

router.get('/colabos', colabos.list);
router.post('/colabos', secure.isAuthenticated, colabos.create);
router.delete('/colabos/:id', secure.isAuthenticated, colabos.delete);

router.post('/message', message.create)

router.get('/works', works.list);

router.get("/profile", secure.isAuthenticated, auth.profile);
router.post("/register", auth.register);
router.post("/authenticate", auth.authenticate);
router.delete("/logout", auth.logout);


module.exports = router;