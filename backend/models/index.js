import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import User from './user.model.js';
import Comment from './comment.model.js';
import Video from './video.model.js';
import Reply from './reply.model.js';
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

// Model associations
User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

Video.hasMany(Comment, { foreignKey: 'videoId' });
Comment.belongsTo(Video, { foreignKey: 'videoId' });

Comment.hasMany(Reply, { foreignKey: 'commentId' });
Reply.belongsTo(Comment, { foreignKey: 'commentId' });

const models = { User, Comment, Video, Reply, Subject };

sequelize.sync({ force: true }) 
  .then(() => console.log('Models synchronized with the database'))
  .catch((err) => console.error('Error synchronizing models', err));

export { sequelize };
export { User, Comment, Video, Reply, Subject }; 
export default models;
