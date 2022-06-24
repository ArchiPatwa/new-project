const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const raw = require('body-parser/lib/types/raw');
const { send } = require('express/lib/response');
var app = express();
app.use(bodyparser.json());

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'archi3458',
    database: 'usermanagment',
    multipleStatements: true
});

conn.connect((err) => {
    if (!err)
    console.log('Connection established');
    else
    console.log(err);
});

app.get('/usermanagment', (req, res) => {
    conn.query('select * from user ', (err, rows, fields) => {
        if (!err)
        res.send(rows);
        else
        console.log(err);
    })
});
app.delete('/usermanagment/:id', (req, res) => {
    conn.query('DELETE from address WHERE userID = ?',[req.params.id], (err, rows, fields) => {
        if (!err)
        res.send('user record deleted');
        else
        console.log(err);
    })
});
app.get('/usermanagment/:id', (req, res) =>{
    conn.query('select * from user WHERE userID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
        res.send(rows);
        else
        console.log(err);
    });
})
// app.post('/usermanagment', (req, res) => {
//     let sql = "UPDATE address SET city = indore WHERE city = Nagpur ";
//     conn.query(sql, (err, rows, fields) => {
//         if  (!err)
//         res.send('updated');
//         else
//         console.log(err)
//     })
//     });
app.put('/usermanagment', function(req, res) {

    var params = req.body;
    var State = params.State;
    var City = params.City;
    var userID = params.userID;
    conn.query("Update address SET State = ? , City = ? WHERE userID = ?", [State, City, userID], function(err, rows, fields) {
        if (err)
        console.log(err);
        else
        console.log("records updated successfully");
    })
});
app.listen(5000, () => {
    console.log('server connected');
});