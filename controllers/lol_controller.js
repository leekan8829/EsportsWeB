const Clan = require('../models/lol_model');
//FetchAll 寫在lol_model
const Player = require('../models/player_model');
//FetchPlayerById and UpdateById 的model都寫在player_model 

// C OK U OK R OK D OK

// READ
//0419 還沒完成 model已修改完
exports.getAllPlayer = async (req, res) => {
  let data = {};
  try {
    await Clan.fetchAll().then(([rows]) => {
      data.player = rows;
    });

    res.render('allplayer', {
      player: data.player,
    });
  } catch (err) {
    console.log(err);
  }
};

//create
exports.createPlayer = async (req, res) => {
  console.log('createPlayer', req.body);
  try {
    await Player.create(req, res).then(([rows]) => {
      res.redirect('/my/allplayer');
    });
  } catch (err) {
    console.log(err);
  }
};

//creat by html post
exports.createPlayer2 = async (req, res) => {
  console.log('createPlayer2', req.body);
  try {
    await Player.create2(req, res).then(([rows]) => {
      res.redirect('/my/allplayer');
    });
  } catch (err) {
    console.log(err);
  }
};


//Read PlayerById by Kan 0419
exports.getClanNumber = async (req, res) => {
  let data = {};
  data.cid = 0;
  console.log('req.params.clan', req.params.clan);
  try {
    if (req.params.clan === 'T1') data.cid = 1;
    else if (req.params.clan === 'DK') data.cid = 2;
    else if (req.params.clan === 'TES') data.cid = 3;
    else if (req.params.clan === 'IG') data.cid = 4;
    await Player.fetchPlayerById(data.cid).then(([rows]) => {
      data.clan = rows;
      //res.json(data);
    });
    res.render('player', {
      data: data.clan,
    });
  } catch (err) {
    console.log(err);
  }
};

// UPDATE  2021/04/19
exports.updatePlayer = async (req, res) => {
  console.log('updatePlayer', req.body);
  try {
    await Player.updateById(req, res).then(([rows]) => {
      res.redirect('/my/allplayer');
    });
  } catch (err) {
    console.log(err);
  }
};

//Delete
exports.delete2Player = async (req, res) => {
  console.log('deletePlayer', req.params.id);
  try {
    await Player.deleteById(req.params.id).then(([rows]) => {
      res.redirect('/my/allplayer');
    });
  } catch (err) {
    console.log(err);
  }
};