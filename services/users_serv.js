const DatabaseUsers = require('../db/users_db')
const bcrypt = require('bcrypt');


//Services Functions
async function getUsers(id) {
   const users = await DatabaseUsers.getUsersDB(id);
    return users
}



async function getLehrer() {
    const users = await DatabaseUsers.getLehrerDB();
     return users
 }
 async function getNews() {
    const news = await DatabaseUsers.getNewsDB();
     return news[0]
 }
 


async function getUsersofClass(idclass) {
    const classesUsers = await DatabaseUsers.getUsersofClassDB(idclass);
     return classesUsers
 }

async function getClass() {
    const classes = await DatabaseUsers.getClassesDB();
     return classes
 }
    
async function checkAuthentication(loginData) {
    const checkAuth = await DatabaseUsers.getAdmin(loginData);
    if(checkAuth.length == 0) return false
    const user = checkAuth[0];
    const result = await bcrypt.compare(loginData.password, user.hashedpassword)
    return result
}









async function cryptPassword(registerData) {
    const username = registerData.username;
    const password = registerData.password;

    const maxID = await DatabaseUsers.getMaxUserID();
    let id = maxID[0].userid + 1

    
 bcrypt.genSalt(10, async function (err, salt){
    bcrypt.hash(password, salt, async function (err, hash) {
        if(err) throw err;
        const checkAuth = await DatabaseUsers.registerUser(username, id, hash);
        
        })
    })
    
    
}








module.exports = {
    getUsers,
    getClass,
    getUsersofClass,
    checkAuthentication,
    getLehrer,
    getNews,
    cryptPassword
}