const express = require('express')
const router = express.Router();
const UserServices = require('../services/users_serv')



//Routes
router.get('/getUserList', async (req, res)=> {
    const data = await UserServices.getUsers(1);
    

    res.send(data)
    console.log("controllers", data);
  })


  module.exports = router