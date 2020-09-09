const express = require('express');
const app = express();
const Database = require('../database/database');
const cors = require('cors');
app.use(cors());
const Cars = require('./cars');
const nunjucks = require('nunjucks');
//configurar nunjs
nunjucks.configure('src/views', {
    express: app,
    //faço cache ou não 
    noCache: true,
})


app.use('/', Cars);


app.listen(4005, (req,res, err) => {
    if(err){
        console.log("Erro ao rodar aplicação ")
    }
    else{
        console.log("Aplicação Rodando com sucess");
    }
})