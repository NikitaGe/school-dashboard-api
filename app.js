const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
const PORT = 3000;
const UserController = require('./controller/users_conn')

app.use(express.json());

app.use(session({
    secret : 'secret_session_tgbbz1',
    resave :false,
    saveUninitialized: false,
    cookie : {
      secure : false,
      maxAge:( 30000 * 10),
      httpOnly: true
    }      
}))

app.use(cors({
  origin : true,
  credentials : true

}));
app.use('/api/users', UserController)
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
})

