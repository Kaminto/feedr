var mysql=require('mysql');
var bcrypt = require('bcrypt-nodejs');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var config = require('../config/config')[env];
exports.getUsers=function(req,res){
    var connection = mysql.createConnection(config.db);
    connection.query("SELECT * FROM users ", function(err, user){
        if (user)
            res.send(user);
        if (!user.length) {
            res.send(false); // req.flash is the way to set flashdata using connect-flash
        }

    });
};


exports.createAccount=function(req,res,next){
var userData =req.body;



    userData.hashed_pwd=bcrypt.hashSync(userData.password, null, null);
    console.log(userData.hashed_pwd);

    var connection = mysql.createConnection(config.db);
    connection.query("SELECT * FROM users WHERE username = ?",[userData.username], function(err, rows) {
        if (err)
            res.send(err);
        if (rows.length) {
             res.status(400);
            return res.send({reason:'That username is already taken.'});
        } else {

            var insertQuery = "INSERT INTO users ( username, password, email ) values" +
                " (?,?,?)";

            connection.query(insertQuery,[userData.username,userData.hashed_pwd,userData.firstName,userData.lastName,userData.gender,userData.faculty,'Admin'],function(err, rows) {
               if(err){
                   res.status(400);
                   return res.send({reason:err.toString()});
               }

                userData.id = rows.insertId;

                 req.logIn(userData,function(err){
                     if(err){return next(err);}
                      res.send(userData);
                 })

            });
        }
    });



};