exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments('id')
    table.string('technology')
    table.string('title')
    table.string('text1')
    table.string('image1')
    table.string('text2')
    table.string('image2')
    table.string('text3')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts')
}
