const User = require('../../models/user')



function auth_controller() {
    //factry funtion returns object
    //now  we are using factory functions
    return {
        //only to read page
        login(req, res) {

            try {
                res.render('auth/login')

            } catch {
                res.send("oooooooppps  errrorr ")
            }
        },
        register(req, res) {

            try {
                res.render('auth/register')

            } catch {
                res.send("oooooooppps  errrorr ")
            }
        },
        postregister(req, res) {
            console.log(req)
            const { name, email, password } = req.body
            //validate request
            if (!name || !email || !password) {
                req.flash('error', 'All fields are necessary')
                req.flash('name', name)
                req.flash('email', email)
                return res.redirect('/register')
            }

            //check if user exists
            User.exists({ email: email }, (err, result) => {
                if (result) {
                    req.flash('error', 'Email already taken')
                    req.flash('name', name)
                    req.flash('email', email)
                    return res.redirect('/register')
                }
            })

            //user create
            const user = new User({
                name,
                email,
                password: password
            })


            user.save().then((user) => {
                //info get save in db redirecting it to mainpage

                //login
                return res.redirect('/')
            }).catch(() => {
                req.flash('error', 'Something went wrong')
                return res.redirect('/register')
            })

        },
        passportinit(req, res) {
            const { email, password } = req.body
            User.exists({ email: email, password: password }, (err, result) => {
                if (result) {
                    return res.redirect('/')
                }
                req.flash('error', 'Incorrect password or email')
                    req.flash('password', password)
                    req.flash('email', email)
                    return res.redirect('/login')

            })

        }
    }
    }
    module.exports = auth_controller;