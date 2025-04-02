import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
// import User from './user.js';
import Comment from './comment.model.js';

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  logging: false,
});

const models = {
  // User, 
  Comment,
};

sequelize.sync({force: true})
  .then(() => console.log('Modelos sincronizados con la base de datos'))
  .catch((err) => console.error('Error al sincronizar modelos', err));

export { sequelize };
export default models;
