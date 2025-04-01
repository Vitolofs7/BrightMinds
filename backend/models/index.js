import { Sequelize } from 'sequelize';
import User from './userModel.js';

const sequelize = new Sequelize('postgres://user:password@localhost:5432/database', {
    dialect: 'postgres',
});

const models = {
  User: User(sequelize, Sequelize.DataTypes),
};

export { sequelize };
export default models;