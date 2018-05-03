var mysql = require('mysql');
//var inquirer = require('inquirer');


var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "", // no Password Added - so node.js will console.log("Connection is Working");
        database: "bamazon" 
    });

connection.connect(function(err){
    if (err) throw err;
    console.log("Connection is Working");
   
})
