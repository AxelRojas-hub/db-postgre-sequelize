import {DataTypes, Model } from 'sequelize';
//Trae la instancia de sequelize
import {sequelize} from './index.js'

export class User extends Model {}    
    User.init({
        firstName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'user'
    })
    
//Para crear un usuario con la clase User
    // const newUser = await User.create({
    //     firstName: 'Juan',
    //     lastname: 'Perez'
    // })
    
    //Para actualizar un usuario
    // await User.update({
    //     firstName: 'Juan',
    //     lastname: 'Gomez'
    // },{
    //     where:{
    //         firstName:'Juan',
    //         lastname: 'Perez'
    //     }
    // })
    
    // Para leer un usuario
    // const usersSelected = await User.findAll({
    //     where:{
    //         firstName: 'Juan'
    //     }
    // });
    
    //Para eliminar un usuario 
    // const user2 = await User.destroy({
    //     where:{
    //     firstName: 'Axel',
    //     lastname: 'Rojas'
    //     }
    // });