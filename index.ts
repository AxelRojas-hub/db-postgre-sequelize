import {sequelize} from './db/index.js'
//Trae la clase User que extiende Model
import {User} from './db/user.js'
import {Product} from './db/product.js'

async function main(){
    //Solo cuando sea necesario hacemos el sync
    // console.log('Syncing...');
    // await sequelize.sync({alter:true})
    
    const productToFind = (await Product.findOne({where:{title: 'Zapatillas Atomik NBA'}})).get();
    console.log(productToFind, typeof productToFind );
    
    // const newUser = await User.create({
    //     firstName: 'Andres',
    //     lastname: 'Rojas'
    // })
}

main();