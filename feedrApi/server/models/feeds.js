var mysql=require('mysql');
var bcrypt = require('bcrypt-nodejs');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var config = require('../config/config')[env];
 


exports.saveFeeds=function(req,res,next){
var userData =req.body;



  

    var connection = mysql.createConnection(config.db);
   

            var insertQuery = "INSERT INTO feeding ( feedTime, feedType) values" +
                " (?,?,)";

            connection.query(insertQuery,[userData.feedTime,userData.feedType],function(err, rows) {
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



};