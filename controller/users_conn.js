const express = require('express');
const router = express.Router();
const UserServices = require('../services/users_serv');

//Routes

router.post('/login', async (req, res) => {
  //console.log("login", req.body);

  console.log("login", req.body);



   

})







router.get('/getUserList', async (req, res)=> {
    try {
      const data = await UserServices.getUsers(1);
      res.send(data);
    }catch(err) {
      console.log(err);
      res.status(400)
    }
  })

  router.get('/selectClass', async (req, res)=> {
    try {
      let idclass = req.query.idclass
      const data = await UserServices.getUsersofClass(idclass);
      res.send(data)
    } catch(err) {
      console.log(err);
      res.status(400)
    }
  })
  
  router.get('/getClasses', async (req, res) => {
    try {
      const data = await UserServices.getClass();
      res.send(data)
    } catch(err) {
        console.log(err);
      res.status(400)
      }
  })


  



  //getClass


  module.exports = router