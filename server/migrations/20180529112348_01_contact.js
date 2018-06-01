exports.up = function(knex, Promise) {
  return knex.schema.createTable('contact', function(table) {
    table.increments('id')
    table.string('Name')
    table.string('Phone')
    table.string('Email')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contact')
}
