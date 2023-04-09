/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('livros', (table) => {
    table.increments('id').primary();
    table.string('titulo',80).notNullable();
    table.string('autor',80).notNullable();
    table.integer('ano',4).notNullable();
    table.decimal('preco',10,2).notNullable();
    table.string('foto',100).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('livros');
};
