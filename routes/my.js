const { Router } = require('express');
var express = require('express');
var router = express.Router();

const lol_controller = require('../controllers/lol_controller');


router.get('/', (req, res) => {
    res.render('homepage', {});
});

router.get('/LPL', (req, res) => {
    res.render('LPL', {});
});
router.get('/LCK', (req, res) => {
    res.render('LCK', {});
});
//read
router.get('/allplayer', lol_controller.getAllPlayer);
router.get('/allplayer/:clan', lol_controller.getClanNumber);

// CREATE
router.post('/create', lol_controller.createPlayer);
router.post('/create2', lol_controller.createPlayer2);
//update
router.post('/update', lol_controller.updatePlayer);

//delete
router.get('/delete/:id', lol_controller.delete2Player);

module.exports = router;
