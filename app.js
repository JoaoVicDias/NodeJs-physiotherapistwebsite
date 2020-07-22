const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mainRouter = require('./router/main')
const handlebars = require('express-handlebars')
const session = require('express-session')
const flash = require('connect-flash')
const mongoose = require('mongoose')
const helmet = require('helmet')
const compression = require('compression')
const app = express()
const URI = require('./config/db')
const secret = require('./config/sess')
const port  = require('./config/port')


//session
app.use(session({secret:secret,resave:false,saveUninitialized:false}))
app.use(flash())

//Db
mongoose.connect(URI,{ useNewUrlParser: true,useUnifiedTopology:true }).then(()=>{
    console.log('servidor conectado')
}).catch((err)=>{
    console.log(err)
})

//Configurando Static
app.use(express.static(path.join(__dirname,'public')))

//handlebars
app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')

//Body-parser
app.use(bodyParser.urlencoded({extended:false}))

app.use(helmet())
app.use(compression())
//Router
app.use(mainRouter)




app.listen(port,console.log('Server is running'))
