var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db:{
            host:'localhost',
            user:'root',
            password:'',
            database:'feedr'
        },
        rootPath: rootPath,
        port: process.env.PORT || 3050
    },
    production: {
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};