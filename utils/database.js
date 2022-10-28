const Sequelize = require('sequelize');
//Objeto de conexión

const sequelize = new Sequelize('semanatec', 'admin', 'Treschiflados1', {
    dialect:'mysql',
    host:'tecweek.cs30ul3lq8lq.us-east-1.rds.amazonaws.com',
    define: {
        timestamps:false,
        freezeTableName:true
    }
})

module.exports = sequelize;