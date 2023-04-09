const express = require('express');
const router = express.Router();

const dbKnex = require("./data/db_config");

//método GET para listar todos os livros
router.get('/', async(req, res) => {
    try{
        const livros = await dbKnex('livros').orderBy('id', 'desc');
        res.status(200).json(livros);//retorna ok e os dados
    }catch(err){
        res.status(400).json({message: error.message}); // retorna status de erro e mensagens
    }  
});