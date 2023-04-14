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

//método POST para cadastrar um livro
router.post('/', async(req, res) => {
    //faz a desestruturação dos dados recebidos no corpo da requisição
    const {titulo,autor,ano,preco,foto} = req.body;

    //se algum dos campos não foi passado , irá enviar uma mensagem de erro ao retornar
    if (!titulo || !autor || !ano || !preco || !foto) {
        return res.status(400).json({message: 'Preencha todos os campos'});
    }

    //caso ocorra algum erro na inclusão, o programa irá capturar (catch) o erro e enviar uma mensagem de erro
    try{
        //insert, faz a inserção na tabela livros e retorna o id gerado
        const novo = await dbKnex('livros').insert({
            titulo,
            autor,
            ano,
            preco,
            foto
        });
        res.status(201).json({id:novo[0]}); //statusCode indica Create
    }catch(error){
        res.status(400).json({message: error.message}); // retorna status de erro e mensagens
    }

});

//método PUT para atualizar um livro, o id indica o registro a ser alterado
router.put('/:id', async(req, res) => {
    const id = req.params.id; //pega o id enviado pela requisição
    const { preco } = req.body; //campo a ser alterado
    try{
        //altera o campo preco, no registro onde o id coincidir com o id enviado
        await dbKnex('livros').update({preco}).where({id});
        res.status(200).json(); //statusCode indica ok no update
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e mensagens
    }

});

//método DELETE para deletar um livro
router.delete('/:id',async(req,res) =>{
    const {id} = req.params; //pega o id enviado pela requisição para ser excluído
    try{
        await dbKnex('livros').del().where({id});
        res.status(200).json(); //statusCode indica ok no delete
    }catch(error){
        res.status(400).json({msg:error.message}); //retorna status de erro e mensagens
    }

});

//filtro por título ou autor
router.get("/filtro/:palavra",async (req,res) => {
    const {palavra} = req.params; //palavra com o título ou autor a ser pesquisado
    try{
        //para filtrar os registros, se utiliza o .where() e suas variações
        const livros = await dbKnex('livros')
        .where("titulo", "like", `%${palavra}%`)
        .orWhere("autor", "like", `%${palavra}%`);
        res.status(200).json(livros); //retorna ok e os dados
    }catch(error){
        res.status(400).json({message: error.message}); // retorna status de erro e mensagens
    }
    }
);

//Resumo do cadastro de Livros
router.get("/dados/resumo", async (req,res) => {
    try{
        //métodos estatísticos para ober dados da tabela
        const consulta = await dbKnex('livros')
        .count({num:"*"})
        .sum({soma: "preco"})
        .max({maior:"preco"})
        .avg({media: "preco"});
        const {num,soma,maior,media} = consulta[0];
        res.status(200).json({num,soma,maior,media}); //retorna ok e os dados
    }catch(error){
        res.status(400).json({message: error.message}); // retorna status de erro e mensagens
    }
});

//Soma dos preços agrupados por ano
router.get("/dados/grafico", async (req,res) => {
    try{
        //obtém o ano e soma o preco dos livros, agrupados por ano
        const totalPorAno = await dbKnex('livros')
        .select("ano")
        .sum({total:"preco"}).groupBy("ano");
        res.status(200).json(totalPorAno); //retorna ok e os dados
    }catch(error){
        res.status(400).json({message: error.message}); // retorna status de erro e mensagens
    }
});

module.exports = router;