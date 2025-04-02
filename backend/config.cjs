const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('agrosos', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = {
  development: {
    username: 'root',
    password: '1234',
    database: 'agrosos',
    host: 'localhost',
    dialect: 'mysql',
  },
};