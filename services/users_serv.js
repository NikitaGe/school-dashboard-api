const DatabaseUsers = require('../db/users_db')

//Services Functions
async function getUsers(id, test) {
    console.log("user");
   const response = DatabaseUsers.getUsersDB(32)
    return response
}



module.exports = {
    getUsers
}