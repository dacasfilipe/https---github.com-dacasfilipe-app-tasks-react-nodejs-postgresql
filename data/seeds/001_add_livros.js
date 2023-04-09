/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('livros').del()
  await knex('livros').insert([
    {
      titulo: "Web design responsivo", autor:"Mauricio samy silva", ano:2014,
  preco: 73.0, foto: "https://s3.novatec.com.br/capas/9788575223925.jpg",
  },
  {
    titulo: "Proteçao moderna de dados", autor:"W. Curtis Person", ano:2021,
preco: 97.0, foto: "https://s3.novatec.com.br/capas/9786586057843.jpg",
},
{
  titulo: "Python para análise de dados", autor:"Wes Mckinney", ano:2018,
preco: 132.0, foto: "https://s3.novatec.com.br/capas/9788575226476.jpg",
},
    
  ]);
};
