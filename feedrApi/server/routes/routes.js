var //auth = require('./auth'),
    users = require('../models/users');
	 

module.exports = function (app, config) {


 app.post('/api/users', users.createAccount);
   
};
