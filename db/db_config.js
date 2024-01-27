const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/db_school_dashboard.db', sqlite3.OPEN_READWRITE, (err)=> {
    if(err) {
        console.log("error");
    } else {
        console.log("successfull");
    }
})

module.exports = {
    db
}