import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Reply = sequelize.define('Reply', {
  commentId: {
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
  tableName: 'Reply',
  timestamps: true,
});

export default Reply;