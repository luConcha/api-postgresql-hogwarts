/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('alumnos', (table) => {
    table.increments('id');
    table.string('nombre').notNullable();
    table.string('apellidos').notNullable();
    table.integer('edad');
    table.string('casa');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('alumnos');
};
