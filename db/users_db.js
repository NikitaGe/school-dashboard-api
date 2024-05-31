const Database = require('./db_config')




async function getUsersDB(id) {
   let sql = `
    SELECT Schueler.Vorname, Schueler.Nachname, Schueler.Geburtsdatum, Schueler.Strasse, Schueler.PLZ, Schueler.Wohnort,
    Klassen.Klassenname, Lehrer.Nachname as Lehrer, Schueler.Anwesenheit
    FROM Schueler
    INNER JOIN Klassen on Schueler.KlasseID = Schueler.KlasseID
    INNER JOIN Lehrer on Klassen.LehrerID = Lehrer.LehrerID
    `;
        return new Promise((resolve, reject) => {
        Database.db.all(sql, (err, rows) => {
            if(err) reject(err);
            resolve(rows);
        })
    })
}


async function getLehrerDB() {
    let sql = `SELECT * FROM Lehrer INNER JOIN Faecher on Lehrer.FachID = Faecher.FachID`;
         return new Promise((resolve, reject) => {
         Database.db.all(sql, (err, rows) => {
             if(err) reject(err);
             resolve(rows);
         })
     })
 }

 async function getNewsDB() {
    let sql = `SELECT * FROM News`;
         return new Promise((resolve, reject) => {
         Database.db.all(sql, (err, rows) => {
             if(err) reject(err);
             resolve(rows);
         })
     })
 }

 






async function getUsersofClassDB(idclass) {
    let sql = `
     SELECT Schueler.Vorname, Schueler.Nachname, Schueler.Geburtsdatum, Schueler.Strasse, Schueler.PLZ, Schueler.Wohnort,
     Klassen.Klassenname, Lehrer.Nachname as Lehrer, Schueler.Anwesenheit
     FROM Schueler
     INNER JOIN Klassen on Schueler.KlasseID = Schueler.KlasseID
     INNER JOIN Lehrer on Klassen.LehrerID = Lehrer.LehrerID where Klassen.KlasseID = ${idclass}

     `;
         return new Promise((resolve, reject) => {
         Database.db.all(sql, (err, rows) => {
             if(err) reject(err);
             resolve(rows);
         })
     })
 }

async function getClassesDB() {
    let sql = `SELECT * FROM Klassen`;
         return new Promise((resolve, reject) => {
         Database.db.all(sql, (err, rows) => {
             if(err) reject(err);
             resolve(rows);
         })
     })
 }



 
 async function  getAdmin(loginData) {
    let sql = `SELECT * FROM User where username = '${loginData.username}'`;
         return new Promise((resolve, reject) => {
         Database.db.all(sql, (err, rows) => {
             if(err) reject(err);
             resolve(rows);
         })
     })
 }
 
 

 async function registerUser(username, id, hash) {
    let sql = `INSERT INTO User (userid, username, hashedpassword) VALUES (${id}, '${username}','${hash}')`;
         return new Promise((resolve, reject) => {
         Database.db.all(sql,(err, rows) => {
             if(err) reject(err);
             resolve(rows);
         })
     })   
 }

 async function getMaxUserID() {
    let sql = `SELECT Max(userid) as userid from User`;
    return new Promise((resolve, reject) => {
    Database.db.all(sql,(err, rows) => {
        if(err) reject(err);
        resolve(rows);
    })
})  
 }




module.exports = {
    getUsersDB,
    getClassesDB,
    getUsersofClassDB,
    getAdmin,
    getLehrerDB,
    getNewsDB,
    registerUser,
    getMaxUserID
}