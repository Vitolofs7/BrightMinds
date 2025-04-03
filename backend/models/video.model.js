import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Subject from './subject.model.js'

const Video = sequelize.define('Video', {
  videoUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  videoName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  summary: {
    type: DataTypes.TEXT,
  },
  duration: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  subjectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Subject,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}, {
  tableName: 'Video',
  timestamps: true,
});

export default Video;
