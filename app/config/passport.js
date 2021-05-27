// const Passportlocal = require('passport-local').Strategy

 const User = require('../models/user')

// function init(passport) {
//   passport.use(new Passportlocal({ usernameField: 'email' }, async(email, password, done) => {
//     //login

//     //check user exist
//     const user = await User.findOne({ email: email, password: password })
//     if (!user) {
//       return done(null,false,{message:'Incorrect username'})
     
//     }
//     if(user.password==password){
//       return done(null, user,{message:'Logged In successfully!'})
//     }
//     return done(null,false,{message:'Incorrect password'});



//   }))

//  //to store something after getting logged in
//  passport.serializeUser((user,done)=>{
//    done(null,user._id)  //storing user id
//  })




// }

function passportinit(req,res){
  console.log(req.body)
  // const {email, password } = req.body
//   User.exists({ email: email ,password:password}, (err, result) => {
//     if (result) {
//         // req.flash('error', 'Email already taken')
//         // req.flash('name', name)
//         // req.flash('email', email)
//         return res.redirect('/')
//     }
// })
}

module.exports = passportinit