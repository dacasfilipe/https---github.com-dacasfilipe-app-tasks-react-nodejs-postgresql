const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World!');
}); 

app.get('/webapp', (req, res) => {
    res.send('<h2>Introduçao ao web app</h2>');
})

//para reconhecer os dados recebidos como sendo um objeto em formato json
app.use(express.json());
app.post('/filmes', (req, res) => {
    //const titulo = req.body.titulo;
    //const genero = req.body.genero;
    const { titulo, genero } = req.body;
    res.send(`Filme:${titulo} , Genero:${genero} , recebido ...`);
})

//Exemplo de Middleware
const log = (req, res, next) => {
    console.log(`......Acessado em ${new Date().toLocaleString()}`);
}

app.get('/transfere', log, (req, res) => {
    res.send('Ok. valor transferido com sucesso.');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

