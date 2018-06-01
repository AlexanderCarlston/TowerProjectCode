const database = require("./database-connection");

module.exports = {
    list(){
      return database('contact')
    },
    read(id){
      return database('contact').select().where('id', id).first()
    },
    create(item){
      return database('contact')
      .insert(item)
      .returning('*')
      .then(record => record[0])
    },
    update(id, item){
      return database('contact')
     .update(item)
     .where("id", id)
     .returning("*")
     .then(item => item[0])
    },
    delete(id){
      return database('contact').delete().where('id', id)
    }
};
