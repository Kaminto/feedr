var feeds = require('../models/feeds'),
    users = require('../models/users');
	 

module.exports = function (app, config) {


 app.post('/api/users', users.createAccount);
 app.post('/api/saveFeeds', feeds.saveFeeds);
   
};
