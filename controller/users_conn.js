const express = require('express')
const router = express.Router();
const UserServices = require('../services/users_serv')



//Routes
router.get('/getUserList', async (req, res)=> {
    //res.sendStatus(404).send
    const data = await UserServices.getUsers(30, '323232');
    console.log("here",data);
    res.send('test')
  })


  module.exports = router