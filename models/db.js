const Sequelize = require('sequelize')
//conexão com o banco de dados MsSQL
const sequelize = new Sequelize('Bordados', 'sa', '@Blindado31', {
  host: "localhost",
  dialect: "mssql",
  query:{raw:true}
})
module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}