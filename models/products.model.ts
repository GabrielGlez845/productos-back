import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';
import Categories from './categories.model';

export class Productos extends Model { }

Productos.init({
    // Id generado automaticamente
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cantidad:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha:{
        type: DataTypes.DATE,
        allowNull: false
    }


    //categoryId
}, {
    sequelize, modelName: "productos",
});

export default Productos;