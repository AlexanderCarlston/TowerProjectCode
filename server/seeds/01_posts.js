exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1,
        technology: "JavaScript",
        title: "You-Don't-Know-JS",
        text1: "This book series has helped me go beyond my practical understanding of JavaScript and actually see what's happening.",
        image1: "", text2: "The author has a lot of insights and is a good resource of understanding JavaScript.",
        image2: "https://images.hanselminutes.com/images/500.jpg", text3: "I would recommend this to anyone who uses JavaScript, it's a good addition to expanding beyond your inital understanding of JavaScript."}
      ])
    }).then(() => {
        return knex.raw("ALTER SEQUENCE posts_id_seq RESTART WITH 2;");
    })
}
