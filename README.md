# school-dashboard-api


     bcrypt.compare(loginData.password, user.hashedpassword, function(err, result) {
        if (err) throw err;
        if (result === true) {
            isAuthenticated = true
            
        } else {
            isAuthenticated = false
        }
 });