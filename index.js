const express = require('express') //para usar o express, precisa realizar o download do framework npm install --save express
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')
const { orderBy } = require('lodash')
//config
  //template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //Body Parser
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())
//Rotas

    app.get('/', function(req,res){
      Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
        res.render('home', {posts: posts})
      })
    })

    app.get('/cadastro', function(req, res){
      res.render('formulario')
    })

    app.post("/add", function(req, res){
     Post.create({
      titulo: req.body.titulo,
      conteudo: req.body.conteudo
     }).then(function(){
      res.redirect('/')
     }).catch(function(erro){
      res.send("Houve um erro: " +erro)
     })
 })

    app.get('/deletar/:id', function(req, res){
      Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Bordado deletado")
      }).catch(function(erro){
        res.send("Bordado inexistente!")
      })
    })

app.listen(8081, function(){
  console.log("Servidor rodando na url http//:localhost:8081")
}) //essa funcao por padrao tem que ser a ultima linha do codigo
