import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    database: 'productos',
    host: 'localhost',
    password: '',
    username: 'root',
    dialect: 'mysql',
    logging: false,
});

export default sequelize;