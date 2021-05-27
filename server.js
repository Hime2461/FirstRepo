require('dotenv').config()    //fetching all things from dotenv file

const express = require('express')
const app = express()
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const path = require('path')

const PORT = process.env.PORT || 3000

const  mongoose=require('mongoose')

const Routes=require('./routes/web')

const session=require('express-session')

const flash=require('express-flash')

const MongoDbStore=require('connect-mongo')

const passport=require('passport')

const bodyParser=require('body-parser')


//database connection
const  url ='mongodb://localhost/mess';
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true})
const connection=mongoose.connection;
connection.once('open',()=>{  // event get trigger while connection is build
    console.log("database connected");
}).catch(err=>{
console.log("falied to connect")
});

const dbconnection=mongoose.connection;


//passport config -for lgin purpose
const passportinit=require('./app/config/passport')

passportinit(passport)
app.use(passport.initialize())
app.use(passport.session())


//session config --express middleware
app.use(session({
    secret:process.env.COOKIE_secret,
    resave:false,
    // store:mongostore,//to store data in mongostre that is ging to store at db
    store:MongoDbStore.create({mongoUrl:dbconnection.client.s.url,collectionName:'sessions'}), //it get store in db-where we cnnect our db
    saveUninitialized:false,
    cookie:{maxAge:1000*60*60*24}  //24 hr-- when cookie get expire session also get delete
   
}))


//flash-- to store cookies in our db ,it is express middleware
app.use(flash())



//Assets
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json())

//global middlewars-they work on each request
app.use((req,res,next)=>{
res.locals.session=req.session;
next()
})

//set template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')


Routes(app)//calling routes




app.listen(PORT, () => {
    console.log('Listening on port 3000!')
})