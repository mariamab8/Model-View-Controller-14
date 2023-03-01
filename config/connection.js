// Dependencies
// Sequelize constructor
const Sequelize = require('sequelize');
// dotenv for local environmental variables for user name and password
require('dotenv').config();



const sequelize = new Sequelize('ecommerce_db', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
  
});

module.exports = sequelize;