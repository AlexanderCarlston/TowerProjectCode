const database = require("./database-connection");

module.exports = {
    list(){
      return database('posts')
    },
    read(id){
      return database('posts').select().where('id', id).first()
    },
    create(item){
      return database('posts')
      .insert(item)
      .returning('*')
      .then(record => record[0])
    },
    update(id, item){
      return database('posts')
     .update(item)
     .where("id", id)
     .returning("*")
     .then(item => item[0])
    },
    delete(id){
      return database('posts').delete().where('id', id)
    }
};
