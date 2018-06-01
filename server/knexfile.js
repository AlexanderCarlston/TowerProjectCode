require('dotenv').config()
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/mySite'
  },
  test: {},
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
