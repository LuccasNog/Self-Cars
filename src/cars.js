const express = require('express')
const router = express.Router();
const Database = require('../database/database');
const BodyParser = require('body-parser');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json())


// Cadastrando os Cars
router.post('/cadastrocarro',(req, res) => {

    let {name, years, prices} = req.body;
    
    let car = {
        nome: name,
        year: years,
        price: prices
    }

    function CadastroCars(){
        Database.insert(car)
        .into('cars')
        .then(cad => {console.log(`${cad} cadastrado com sucesso`)})
    }

    CadastroCars();
})


// Pegando todos os carros cadastrados do Bd
router.get('/cars',(req, res) => {
    Database.select().table("cars")
        .then(car => {
            console.log(car);
            res.json(car.splice(1, 4));
        })
        .catch(err => {
            console.log("Erro na consulta")
        })
})

// Editar veiculo
router.put('/edit/:id', (req, res) => {
  
    let idUser = req.params.id;

   function updateCars(){
            if(isNaN(idUser)){
            console.log("O número não é um ID");
            //    Aqui ele deve fazer alguma ação 
            }
            try {
                Database
                    .where({id: idUser})
                    .update({nome: nome,year: year, price: price})
                    .table("cars")
                    .then(data => {
                        console.log(data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            catch (error) {
               console.log("Houve um erro")  
            }  
    } 

})


// Deletar veiculo
router.delete('/delete/:id',(req, res) => {
    let idUser = req.params.id;
    if(isNaN(idUser))
    function DeleteCars(){
             Database.where({id: idUser})   
                 .delete()
                 .table("cars")
                 .then(deleteC => {
                    console.log(`${deleteC}`)
                 })
                 .catch(err => console.log(err));
    }
    DeleteCars();

})
module.exports = router;