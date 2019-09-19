const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'nodeuser',
    password: 'nodetest',   // configure to old mysql_native_password
    database: 'cs157a',
    debug: false
});

function handle_database(req, res) {
    pool.getConnection(function(err, connection) {
        if (err) {
            res.json({'code' : 100, 'status' : "Error connecting to Database"});
            return;
        }
        console.log('Connected to MySQL');
        connection.query("SELECT * FROM emp", (err, rows) => {
            connection.release();
            if (!err) {
                let str ="<table><tr><th>ID</th><th>NAME</th><th>AGE</th></tr>";
                for ( ele of rows) {
                    str += "<tr>";
                    str += `<td>${ele.id}</td><td>${ele.name}</td><td>${ele.age}</td>`
                    str += "</tr>"
                }
                res.send(str);
            }
        });
        connection.on('error', function(err) {
            res.json({'code' : 100, 'status' : "Error connecting to Database"});
        });
    });
    
}


//app.use(express.static(__dirname));
app.get('/', (req ,res) => handle_database(req,res));
//app.get('/data', (req,res) => handle_database(req,res));
app.listen(port, () => console.log(`Example app listening on port ${port}`));
