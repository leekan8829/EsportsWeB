const { static } = require('express');
const db = require('../utils/database')

const Clan = class Clan {
    constructor(cid, belong, rank, name, logo) {
        this.cid = cid;
        this.belong = belong;
        this.rank = rank;
        this.name = name;
        this.logo = logo;
    }

    //Read
    static fetchAll() {
        return db.execute('SELECT player.name as ID,player.real_name,player.position,`character`.name as `main`,division.area_name as "area",clan.name as "戰隊",player.photo,clan.logo as `logo` FROM player,clan,`character`,division where player.belong_clan=clan.cid AND clan.belong = division.did AND player.main = `character`.chid ;');
    }

    static fetchClan(cid) {
        return db.execute('SELECT `name`,`area_name`,`rank`,`full_name`,`founded` FROM clan,division where clan.belong=division.did and cid = ? ;', [cid]);
    }

}



const testFetchHomepage = async (req, res) => {
    try {
        await Clan.fetchHomepage().then(([rows]) => {
            console.log('testFetchAll \n', JSON.stringify(rows));
        });
    } catch (err) {
        console.log(err);
    }
};

const testFetchClan = async (req, res) => {
    try {
        await Clan.fetchClan(cid).then(([rows]) => {
            console.log('testFetchClan \n', JSON.stringify(rows));
        });
    } catch (err) {
        console.log(err);
    }
};

// testFetchHomepage();
// testFetchClan(2);

module.exports = Clan;


