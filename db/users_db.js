const Database = require('./db_config')




async function getUsersDB(id) {
    const sql = `SELECT * FROM T_Klasse`;
        return new Promise((resolve, reject) => {
        Database.db.all(sql, (err, rows) => {
            if(err) reject(err);
            resolve(rows);
        })
    })
}


module.exports = {
    getUsersDB
}