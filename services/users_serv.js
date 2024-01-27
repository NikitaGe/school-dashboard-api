const DatabaseUsers = require('../db/users_db')

//Services Functions
async function getUsers(id) {
   const response = await DatabaseUsers.getUsersDB(id)
   console.log("res",response);
    return response
}



module.exports = {
    getUsers
}