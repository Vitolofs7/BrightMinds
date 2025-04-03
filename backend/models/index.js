import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import User from './user.model.js';
import Comment from './comment.model.js';
import Reply from './reply.model.js';
import Video from './video.model.js';
import Subject from './subject.model.js';

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
  User, 
  Comment,
  Reply,
  Video,
  Subject,
};

sequelize.sync({ force: true })
  .then(() => console.log('Models synchronized with the database'))
  .catch((err) => console.error('Error synchronizing models', err));

export { sequelize };
export default models;
