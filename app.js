var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");

var app =  express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    console.log('current route is home');
    res.render('index', {title: 'Welcome'});
});

app.get('/about', function (req, res) {
    console.log('current route is home');
    res.render('about');
});

app.listen(3000);
console.log("App is running on port 3000");