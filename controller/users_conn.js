const express = require('express')
const router = express.Router();
const UserServices = require('../services/users_serv')



//Routes
router.get('/getUserList', async (req, res)=> {
    const data = await UserServices.getUsers(1);
    res.send(data);
  })

  router.get('/selectClass', async (req, res)=> {
    //console.log(req.query.idclass);
    let idclass = req.query.idclass
    const data = await UserServices.getUsersofClass(idclass);
    res.send(data)

  })




  

  
  router.get('/getClasses', async (req, res)=> {
    const data = await UserServices.getClass();
    res.send(data)
  })
  



  //getClass


  module.exports = router