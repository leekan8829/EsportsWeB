const Member = require('../models/api_model');
const request = require('request');

//API
exports.getAllPlayer = async (req, res) => {
    try {
        await Member.fetch_api().then(([rows]) => {
            res.json(rows);
        });
    } catch (err) {
        console.log(err);
    }
};

exports.getPlayerById = async (req, res) => {
    console.log('getPlayer', req.params.id);
    try {
        await Member.fetch_api_byId(req.params.id).then(([rows]) => {
            res.json(rows);
        });
    } catch (err) {
        console.log(err);
    }
};

exports.getCount = async (req, res) => {
    try {
        await Member.count_api().then(([rows]) => {
            console.log(rows);
            res.json(rows);
        });
    } catch (err) {
        console.log(err);
    }
};