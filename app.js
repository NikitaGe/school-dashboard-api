const express = require('express');
const app = express();
const PORT = 3000;
const UserController = require('./controller/users_conn')


app.use('/api/users', UserController)

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
})