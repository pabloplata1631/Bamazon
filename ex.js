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
    // below call out function
    table();
   
})

// table function from mysql database to print when node ex.js
var table = function(){
    connection.query("SELECT * FROM products", function(err,res){
        for(var i=0; i <res.length; i++){
            console.log(res[i].item_id+" || "+res[i].product_name+" || "+res[i].department_name+" || "+res[i].price+" || "+res[i].stock_quantity+"\n");
        }
        promptUser(res);
    })
}

var promptUser = function(res){
    inquirer.prompt([{
        type:'input',
        name: 'choice',
        message:"what will you like to buy today? [to QUIT please press Q]"
    }]).then(function(answer){
        var correct = false;
        for(var i=0; i<res.length; i++){
            if(res[i].product_name== answer.choice){
                correct=true;
                var product=answer.choice;
                var id=i;
                inquirer.prompt({
                    type:"input",
                    name: "quant",
                    message: "How many are you buying?",
                    validate: function(value){
                        if(isNaN(value)==false){
                            return ture;
                        }else{
                            return false;
                        }
                    }
                }).then(function(answer){
                    if((res[id].stock_quantity-answer.quant)>0){
                        connection.query("UPDATE products SET stock_quantity='"+(res)[id].stock_quantity-answer.quant)+"' WHERE product_name='"+producut+ "'", function(err,res2){
                            console.log("Product BOUGHT!!");
                            table();
                            
                        }
                    }
                })
            }
        }
    })
}
