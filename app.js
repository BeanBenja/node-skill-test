const express = require('express');
const app = express();
const users = require('./views/user');
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index');
});
 
app.get('/user', function (req, res) {
    res.json(users.findAll());
});
 
app.get('/user/:login', function (req, res) {
    var id = req.params.id;
    res.json(users.findById(id));
});

app.listen(1000, () => {
    console.log('http://localhost:1000!');
});