import { DataTypes, Model } from "sequelize";
import {sequelize} from './index.js'

export class Product extends Model{}
Product.init({
    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'product'
})