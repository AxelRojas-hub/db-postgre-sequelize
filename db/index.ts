import { Sequelize, DataTypes, Model } from 'sequelize';
process.loadEnvFile('.env')
export const sequelize = new Sequelize(process.env.DB_URI);

(async()=>{
    try {
            await sequelize.authenticate();
            console.log('Se conecto a la bd')
        } catch (error) {
            console.error('No se pudo conectar', error)
        }
})();