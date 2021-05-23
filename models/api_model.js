const { static } = require('express');
const db = require('../utils/database')

const Member = class Member {
    constructor(cid, belong, rank, name, logo) {
        this.cid = cid;
        this.belong = belong;
        this.rank = rank;
        this.name = name;
        this.logo = logo;
    }

    //Read
    static fetch_api() {
        return db.execute('SELECT player.name as ID,player.real_name,player.position,`character`.name as `main`,division.area_name as "area",clan.name as "戰隊",player.photo,clan.logo as `logo` FROM player,clan,`character`,division where player.belong_clan=clan.cid AND clan.belong = division.did AND player.main = `character`.chid ;');
    }
    //Read by id
    static fetch_api_byId(pid) {
        return db.execute('SELECT player.name as ID,player.real_name,player.position,`character`.name as `main`,division.area_name as "area",clan.name as "戰隊",player.photo,clan.logo as `logo` FROM player,clan,`character`,division where player.belong_clan=clan.cid AND clan.belong = division.did AND player.main = `character`.chid AND player.pid = ? ;', [pid]);
    }
    //Count
    static count_api() {
        return db.execute("SELECT COUNT(*)  AS 'playercount' FROM player;");
    }
}



// const testFetchHomepage = async (req, res) => {
//     try {
//         await Member.count_api().then(([rows]) => {
//             console.log('testFetchAll \n', JSON.stringify(rows));
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };

// testFetchHomepage();
// testFetchClan(2);

module.exports = Member;