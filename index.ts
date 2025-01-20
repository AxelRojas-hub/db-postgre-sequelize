const { Sequelize, DataTypes, Model } = require('sequelize');


(async ()=>{
    process.loadEnvFile('.env')
    // Option 1: Passing a connection URI
    const sequelize = new Sequelize(process.env.DB_URI);
    class User extends Model {}
    
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
    
    try {
        await sequelize.authenticate();
        console.log('Se conecto bien che')
    } catch (error) {
        console.error('No se pudo conectar', error)
    }

    await sequelize.sync({alter: true})
    
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
    const usersColl = await User.findAll()
    console.log("usersColl", usersColl.map(user => user.dataValues));
    


})();