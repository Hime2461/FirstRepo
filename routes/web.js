
const home_controller=require('../app/http/controllers/home_controllers')();

const auth_controller=require('../app/http/controllers/auth_controllers')();

const cart_controller=require('../app/http/controllers/customers/cart_controllers')();

const passportinit=require('../app/config/passport')

function Routes(app){
    //root routing
 app.get('/',home_controller.index)



app.get('/cart', cart_controller.index)

app.post('/cart', cart_controller.order)

app.get('/login', auth_controller.login)

 app.post('/login',auth_controller.passportinit)

app.get('/register', auth_controller.register)

app.post('/register',auth_controller.postregister)

app.post('/updatecart',cart_controller.update)


}

module.exports=Routes