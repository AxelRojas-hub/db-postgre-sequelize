import {sequelize} from './db/index.js'
//Trae la clase User que extiende Model
import {User} from './db/user.js'

async function main(){
    //Solo cuando sea necesario hacemos el sync
    // sequelize.sync({alter:true})

    const newUser = await User.create({
        firstName: 'Andres',
        lastname: 'Rojas'
    })
}

main();