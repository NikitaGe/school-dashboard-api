const DatabaseUsers = require('../db/users_db')

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
    let isAuth = false;

    if(checkAuth.length > 0) {
        isAuth = true
    }else {
        isAuth = false
    }

    return isAuth
}









module.exports = {
    getUsers,
    getClass,
    getUsersofClass,
    checkAuthentication,
    getLehrer,
    getNews
}