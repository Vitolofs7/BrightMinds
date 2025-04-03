import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import User from './user.model.js';
import Comment from './comment.model.js';
import Video from './video.model.js';
import Reply from './reply.model.js';

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

// Relaciones entre los modelos
User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

Video.hasMany(Comment, { foreignKey: 'videoId' });
Comment.belongsTo(Video, { foreignKey: 'videoId' });

Comment.hasMany(Reply, { foreignKey: 'commentId' }); // Un comentario tiene muchas respuestas
Reply.belongsTo(Comment, { foreignKey: 'commentId' }); // Una respuesta pertenece a un comentario

const models = { User, Comment, Video, Reply };

sequelize.sync({ force: true }) 
  .then(() => console.log('Models synchronized with the database'))
  .catch((err) => console.error('Error synchronizing models', err));

export { sequelize };
export { User, Comment, Video, Reply }; 
export default models;
