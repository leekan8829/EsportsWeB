const { Router } = require('express');
var express = require('express');
var router = express.Router();
var request = require('request');


const api_controller = require('../controllers/API_controller');
//router.get('/', api_controller.getAPI);

router.get('/', function (req, res, next) {
    request('https://kanstrapi.herokuapp.com/players/1', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log(body) // 列印google首頁
            res.send(body);
        }
    })
});

module.exports = router;