var mysql=require('mysql');
module.exports=function(config){


    function getMySqlConnection(){
        var connection = mysql.createConnection(config.db);

        connection.connect(function(err){
            if(err){throw err;}
            console.log('Connected Successfully')
        });
        return connection;
    }

    function closeMySqlConnection(currentConnection){
        if(currentConnection){
            currentConnection.end(function(err){
                if(err){throw err;}
                console.log('Connection closed successfully')
            })
        }
    }
   

};