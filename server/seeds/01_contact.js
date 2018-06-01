exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('contact').insert([
        {id: 1, Name: 'Steve', Phone :"66666666666", Email: 'steeeeeve@aol.com'},
        {id: 2, Name: 'Macy', Phone :"12345678900", Email: 'maccccy@aol.com'},
        {id: 3, Name: 'Greg', Phone :"00987654321", Email: 'gregggg@aol.com'}
      ]);
    }).then(() => {
        return knex.raw("ALTER SEQUENCE contact_id_seq RESTART WITH 4;");
    })
}
