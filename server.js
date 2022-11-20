const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')

const PORT = process.env.PORT || 3000  

const app = express()                                    
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

async function start() { 
  try {
    app.listen(PORT, () => {
      console.log('Сервер запустился!)')
    })
  } catch (e) {
    console.log(e)
  }
}

start()