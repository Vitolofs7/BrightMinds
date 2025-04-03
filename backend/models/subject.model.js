import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Subject = sequelize.define('Subject', {
  subjectName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'subjects',
  timestamps: false,
});

export default Subject;
