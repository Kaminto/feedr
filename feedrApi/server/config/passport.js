var passport=require('passport'),
    mysql=require('mysql'),
    LocalStrategy =require('passport-local').Strategy;

module.exports=function(config){
    var connection = mysql.createConnection(config.db);
    var bcrypt = require('bcrypt-nodejs');
    passport.use(new LocalStrategy(function(username,password,done){
            connection.query("SELECT * FROM users WHERE username = ?",[username], function(err, user){
                if (user[0] && bcrypt.compareSync(password, user[0].password)){
                    return done(null, user[0]);
                }
                else {
                    return done(null, false); // req.flash is the way to set flashdata using connect-flash
                }

            });
        }
    ));



    passport.serializeUser(function(user, done) {
        if(user) {
            done(null, user.id);
        }
    });

    passport.deserializeUser(function(id, done) {
        connection.query("SELECT * FROM users WHERE id = ? ",[id], function(err, user){
            //done(err, rows[0]);
            if(user[0]) {
                return done(null, user[0]);
            } else {
                return done(null, false);
            }

        });
    });


};