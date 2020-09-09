const express = require('express')
const router = express.Router();
const Database = require('../database/database');
const BodyParser = require('body-parser');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json())

/*
const compradores = [
    {
        name: "José da Silva",
        phone: 6428062268,
        cpf: 96790888128,
        rg: 150790314,
        data_nascimento:04/07/1999
    }
]
*/ 

// Quero criar uma função que vai pegar os dados do Cadastrado e retonar um objeto para cadastrar naFuncao InserBd

function PegaDados(){
    let {name, phone, cpf, rg, data_nascimento} = req.body;
    let user = {name, phone, cpf, rg, data_nascimento};
    return user.json();
}


function InserBd(){
    PegaDados();
    let query = Database.insert(user).into("comprador")
    .then(comp => {
        console.log("Elemento inserido com sucesso");
    })
    .catch(err => console.log(err))
}

/*
PRÓXIMOS PASSOS
 - FUNÇÃO QUE VAI VALIDAR OS DADOS DO USUÁRIO(VERIFICAR SE O CPF E NUMERO DE ELEFONE JÁ EXISTE)

 - CRIAR UMA FUNCAO DÁ CRÉDITO AO USUÁRIO (PODEMOS FAZER ISSO COM BITCOIN TESTNET TENHO QUE ESTUDAR PA VER CMO FAZ)


*/

