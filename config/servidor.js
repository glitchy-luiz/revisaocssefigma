//importar o pacote do express
const express = require('express')
//executar o express aplication
const app = express()

//configurar a porta local
const porta = process.env.PORT || 3000

//habilitar o express para receber os dados de formularios
app.use(express.urlencoded({extended:false}))

//importar o consign
const consign = require('consign')
//executar e configurar
consign().include('./routes').into(app)

//indicar a pasta dos assets (css, js, images, webfonts)
app.use(express.static('./src/'))



module.exports = {app,porta}