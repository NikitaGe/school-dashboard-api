const express = require('express');
const axios = require('axios');
const router = express.Router();
const UserServices = require('../services/users_serv');

//Routes



router.get('/weather-proxy',  async (req, res)=> {
  try {
    console.log("etetet");
      const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min');
      res.json(response.data);



  }catch(err) {
    console.log(err);
    res.status(400)
  }
})





router.post('/login', async (req, res) => {
  const loginData = req.body.data;
  try {
    if(req.session.username) {
      res.send(true)
    }else {
      const isAuth = await UserServices.checkAuthentication(loginData);
      if(isAuth) {
        req.session.username = loginData.username;
      }
      res.send(isAuth);
    } 
  }catch(err) {
    console.log(err);
    res.status(400)
  }
});


router.post('/logout', async (req, res) => {

  try {
   req.session.destroy( ()=> {
    console.log("session killed");
   })
  }catch(err) {
    console.log(err);
    res.status(400)
  }
});









router.post('/checkAuthStatus', async (req, res) => {
  let isAuth = false;
  try {
    if(req.session.username) {
      isAuth = true
    }else {
      isAuth = false
    }
    res.send(isAuth)
  }catch(err) {
    console.log(err);
    res.status(400)
  }
})

router.post('/register', async (req, res) => {
  try {
    const registerData = req.body.data;
    const password = await UserServices.cryptPassword(registerData);
  }catch(err) {
    console.log(err);
    res.status(400)
  }
})

router.get('/getUserList',  async (req, res)=> {
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
      res.send(news);
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