const Sequelize = require('sequelize')
//conexão com o banco de dados MsSQL
const sequelize = new Sequelize('', '', '', {//adicionar credenciais do banco
  host: "localhost",
  dialect: "mssql",
  query:{raw:true}
})
module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}