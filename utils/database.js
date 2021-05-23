const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '0000',
//   database: 'lol',
// });


const pool = mysql.createPool({
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'bf3c182d1c5820',
  password: 'be3688ce',
  database: 'heroku_2119dba3a8d010e',
});


// test
// pool.query('SELECT `name`,`area_name`,`rank`,`full_name`,`founded` FROM clan,division where clan.belong=division.did;', (err, results) => {
//   console.log(JSON.stringify(results));
//   console.log('database connection successful');
// });

module.exports = pool.promise();
