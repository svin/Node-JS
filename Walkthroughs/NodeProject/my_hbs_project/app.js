const bodyParser 	= require('body-parser')
const morgan 	= require('morgan')
const exp_hbs  	= require('express-handlebars')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
const hbs_options = {
    extname	: '.hbs',
    layoutsDir 	: 'views/layouts/',
    partialsDir 	: 'views/partials/',
    defaultLayout	: 'main'
}
app.engine('hbs', exp_hbs(hbs_options))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('homepage')
})

app.listen(3000, ()=> {
    console.log('Express server listening on port 3000')
})

app.use(express.static(__dirname + '/public'))

