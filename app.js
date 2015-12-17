var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'kalpanat-nodejs_cmpe281-2295230',
  user     : 'kalpanat',
  password : '',
  database : 'cmpe281'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get("/",function(req,res){
connection.query('SELECT * from gumball', function(err, rows, fields) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });
});

app.listen(3000);