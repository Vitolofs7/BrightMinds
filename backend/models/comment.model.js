import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Comment = sequelize.define('Comment', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  videoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
  },
  like: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  dislike: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  tableName: 'comments',
  timestamps: true,
});

export default Comment;