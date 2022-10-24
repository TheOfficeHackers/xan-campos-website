const express = require('express');
const router = express.Router();
const { concerts, auth, videos, works, colabos, message, sideman, easterEgg } = require('../controllers/');
const secure = require("../middleware/secure.mid");
const upload = require("./multer.config");


router.get('/concerts', concerts.list);
router.post('/concerts', secure.isAuthenticated, concerts.create);
router.delete('/concerts/:id', secure.isAuthenticated, concerts.delete);

router.get('/videos', videos.list);
router.post('/videos', secure.isAuthenticated, videos.create);
router.delete('/videos/:id', secure.isAuthenticated, videos.delete);

router.get('/colabos', colabos.list);
router.post('/colabos', secure.isAuthenticated, upload.single('cover'), colabos.create);
router.delete('/colabos/:id', secure.isAuthenticated, colabos.delete);

router.get('/sideman', sideman.list);
router.post('/sideman', secure.isAuthenticated, upload.single('cover'), sideman.create);
router.delete('/sideman/:id', secure.isAuthenticated, sideman.delete);

router.post('/message', message.create);

router.get('/worksXanTrio', works.listAlbumsXanTrio);
router.get('/worksXan', works.listAlbumsXan);

router.get("/profile", secure.isAuthenticated, auth.profile);
router.post("/register", auth.register);
router.post("/authenticate", auth.authenticate);
router.delete("/logout", auth.logout);

router.get("/easter-egg", easterEgg.list);
router.post("/easter-egg", easterEgg.create);

module.exports = router;