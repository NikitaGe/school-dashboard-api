const express = require('express');
const router = express.Router();
const UserServices = require('../services/users_serv');

//Routes

router.post('/login', async (req, res) => {
  const loginData = req.body.data;
  try {
    const isAuth = await UserServices.checkAuthentication(loginData);
    res.send(isAuth);
  }catch(err) {
    console.log(err);
    res.status(400)
  }
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


  
  router.get('/getLehrerList', async (req, res)=> {
    try {
      const data = await UserServices.getLehrer();
      res.send(data);
    }catch(err) {
      console.log(err);
      res.status(400)
    }
  })



  router.get('/getNews', async (req, res)=> {
    try {
      const news = await UserServices.getNews();
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