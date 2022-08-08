const db = require('./db')

const Post = db.sequelize.define('Bordados',{
  titulo:{
    type: db.Sequelize.STRING
  },

  conteudo:{
    type: db.Sequelize.TEXT
  }
})

module.exports = Post

//Post.sync({force: true}) 
// esse commando só é executado uma vez para criar uma tabela. Se eu rodar esse comando novamente, ele irá recriar a tabela e substituirá os arquivos já presentes