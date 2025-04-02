import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); 

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  logging: false, 
});

sequelize.authenticate()
  .then(() => console.log('✅ Conexión exitosa a PostgreSQL'))
  .catch(error => console.error('❌ Error de conexión a PostgreSQL:', error));

export default sequelize;