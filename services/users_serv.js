const DatabaseUsers = require('../db/users_db')

//Services Functions
async function getUsers(id) {
   const response = await DatabaseUsers.getUsersDB(id)
    return response
}


async function getUsersofClass(idclass) {
    const response = await DatabaseUsers.getUsersofClassDB(idclass)
     return response
 }



async function getClass() {
    const response = await DatabaseUsers.getClassesDB()
     return response
 }
    










module.exports = {
    getUsers,
    getClass,
    getUsersofClass
}