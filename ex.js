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
    table();
   
})

// table function from mysql databe 
var table = function(){
    connection.query("SELECT * FROM products", function(err,res){
        for(var i=0; i <res.length; i++){
            console.log(res[i].item_id+" || "+res[i].product_name+" || "+res[i].department_name+" || "+res[i].price+" || "+res[i].stock_quantity+"\n");
        }
    })
}
