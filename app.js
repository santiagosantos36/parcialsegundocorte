
const express = require ('express');
const app = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json());


const dotenv = require('dotenv');
const res = require('express/lib/response');
dotenv.config({path:'./env/.env'});

app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));


//  Plantillas
app.set('view engine', 'ejs');

//encriptado
const bcryptjs= require ('bcryptjs');

// Var.
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true    
}));

//conexion bd

const connection = require ('./database/DB')
app.get('/', (req, res) => {

    res.render('index', {msg: 'esto es un mensaje'});

})

app.get('/login', (req,res)=>{

    res.render('login');
})


app.listen(3000, (req,res) => {

    console.log('servidor local en el puerto 3000')

})