const { static } = require('express');
const db = require('../utils/database')

const Player = class Player {
    constructor(pid, name, real_name, belong_clan, position, main, world_champ, photo) {
        this.pid = pid;
        this.name = name;
        this.belong_clan = belong_clan;
        this.position = position;
        this.main = main;
        this.world_champ = world_champ;
        this.photo = photo;
        this.real_name = this.real_name
    }

    //Read T1  by kan 04/18
    static fetchT1() {
        return db.execute('SELECT player.name as ID,player.real_name,player.position,`character`.name as "main",clan.name as "戰隊",player.photo FROM player,clan,`character` where player.belong_clan=clan.cid AND clan.cid=1 AND player.main = `character`.chid;');
    }
    static fetchPlayerById(cid) {
        return db.execute('SELECT player.name as ID,player.real_name,player.position,`character`.name as `main`,division.area_name as "area",clan.name as "戰隊",player.photo,clan.logo as `logo` FROM player,clan,`character`,division where player.belong_clan=clan.cid AND clan.belong = division.did AND player.main = `character`.chid AND clan.cid=?;', [cid]);
    }

    // Create
    static create(req, res) {
        return db.execute(
            'INSERT INTO player (pid, `name`, real_name, belong_clan, `position`, main,world_champ,photo) VALUES (?, ?,?, ?,?,?,?,?)',
            [
                req.body.pid,
                req.body.name,
                req.body.real_name,
                req.body.belong_clan,
                req.body.position,
                req.body.main,
                req.body.world_champ,
                req.body.photo
            ]
        );
    }
    static create2(req, res) {
        return db.execute(
            'INSERT INTO player (pid, `name`, real_name, belong_clan, `position`, main,world_champ,photo) VALUES (?, ?,?, ?,?,?,?,?)',
            [
                req.body.pid,
                req.body.name,
                req.body.real_name,
                req.body.belong_clan,
                req.body.position,
                req.body.main,
                req.body.world_champ,
                req.body.photo
            ]
        );
    }

    // UPDATE
    static updateById(req, res) {
        const pid = req.body.pid;
        const name = req.body.name;
        const real_name = req.body.real_name;
        const belong_clan = req.body.belong_clan;
        const position = req.body.position;
        const main = req.body.main;
        return db.execute(
            'UPDATE player SET name = ?, real_name = ?, belong_clan = ?, `position` = ?, main = ? WHERE pid = ? ',
            [name, real_name, belong_clan, position, main, pid]
        );
    }

    //Delete
    static deleteById(pid) {
        return db.execute('DELETE FROM player WHERE pid = ?', [pid]);
    }
}


// test
const testFetchHomepage = async (req, res) => {
    try {
        await Player.fetchPlayerById(4).then(([rows]) => {
            console.log('testFetchAll', JSON.stringify(rows));
        });
    } catch (err) {
        console.log(err);
    }
};

//testFetchHomepage();

module.exports = Player;
