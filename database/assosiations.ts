
import Categories from '../models/categories.model';
import Productos from '../models/products.model';




export const createAssosiations = () => {

    //Services.
    

  //  Products.hasMany(Details, {foreignKey:{allowNull:false},onDelete:'CASCADE'});
  //  Details.belongsTo(Products, {foreignKey:{allowNull:false},onDelete:'CASCADE'});

    //Users
   // Directions.hasOne(Users,{foreignKey:{allowNull:false},onDelete:'CASCADE'});
   // Users.belongsTo(Directions,{foreignKey:{allowNull:false},onDelete:'CASCADE'});

    //Employees


    //Products
    Categories.hasMany(Productos, {foreignKey:{allowNull:false},onDelete:'CASCADE'});
    Productos.belongsTo(Categories, {foreignKey:{allowNull:false},onDelete:'CASCADE'});

    //Pricings
    

}

