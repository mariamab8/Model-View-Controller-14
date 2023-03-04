// Dependencies
// Sequelize constructor
const Sequelize = require('sequelize');
// dotenv for local environmental variables for user name and password
require('dotenv').config();


let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize("tech_blog", "root", "", {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
  });
}


module.exports = sequelize;