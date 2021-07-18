const express = require('express')
const app = express()
const path = require('path')

app.set('port',3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/rutas', (req,res)=>{
    res.render('rutas')
})
app.get('/precio', (req,res)=>{
    res.render('precio')
})
app.get('/preguntas', (req,res)=>{
    res.render('preguntas')
})
app.get('/contacto', (req,res)=>{
    res.render('contact')
})

app.listen(app.get('port'), ()=>{
    console.log('Servidor en el puerto', (app.get('port')))
})