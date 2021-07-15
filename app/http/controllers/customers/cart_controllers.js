//controllers use to handle post n logic what to show after get request

const user = require('../../../models/user')

//import { scripts } from 'laravel-mix';
//import {Noty} from 'noty'; //to add notification effect
//import {alert} from 'node-popup';




function cart_controller() {
    //factry funtion returns object
    //now  we are using factory functions
    return {
        //only to read page
        index(req, res) {

            try {
                res.render('customers/cart')

            } catch {
                res.send("oooooooppps  errrorr ")
            }
        },
        update(req, res) {

            // let cart={
            //     items:{
            //         pizzaId:{  item:pizzaObject,qty:0  },
            //         pizzaId:{  item:pizzaObject,qty:0  },
            //     },
            //     totquantity:0,
            //     totprice:0
            // }

            //for the first time creating cart and adding basic structure 
            if (!req.session.cart) {
                req.session.cart = {
                    items: {},
                    totquantity: 0,
                    totprice: 0
                }
            }
            let cart = req.session.cart
            //check if item present ornot
            if (!cart.items[req.body._id]) {  //not present
                cart.items[req.body._id] = {
                    item: req.body,
                    qty: 1
                }
                cart.totquantity = cart.totquantity + 1;
                cart.totprice = cart.totprice + req.body.price;

            }
            else {  //present--so increase only qty
                cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1;
                cart.totquantity = cart.totquantity + 1;
                cart.totprice = cart.totprice + req.body.price;

            }


            return res.json({ totqty: req.session.cart.totquantity })




        }
        ,
        order(req, res) {  //to place an order
         
            //   console.log(  typeof req.session.cart.items);==>object of object having id as key n object
            var count=1;
            for (let mess of Object.values(req.session.cart.items)) {

                var kadam = 'vaishnavidhakare05@gmail.com';
                var shriyash = 'vaishnavid6122@gmail.com';
                var neha = 'fordeploy404@gmail.com';
                var sidhhivinayak = 'vaishnavidhakare05@gmail.com';
                var msg = `Dish Name: ${mess.item.dish}\nTotal Quantity: ${mess.qty}\nTotal Price: ${mess.item.price * mess.qty}\nCustomer Phone Number: ${req.body.number}\nAddress: ${req.body.address}`
                var custemail;
                if (mess.item.name == "Kadam") {
                    custemail = kadam
                }
                if (mess.item.name == "SidhhiVinayak") {
                    custemail = sidhhivinayak
                }
                if (mess.item.name == "Neha") {
                    custemail = neha
                }
                if (mess.item.name == "Shriyash") {
                    custemail = shriyash
                }
                console.log('configuring');

                // Require'ing module and setting default options


                var send = require('gmail-send')({
                    // var send = require('../index.js')({
                    user: 'vaishnavidhakare05@gmail.com',
                    pass: 'Anju@2000',
                    to: custemail,
                    subject: 'Orders',
                    text: msg,
                });


                // Send email

                console.log('sending');
              

                const result = send() // Using default parameters
                    .then((result) => {
                        console.log("success")
                       return  res.redirect('/')
                      
                    })
                    .catch((error) => {
                        console.log('fail',error)
                     return  res.redirct('/cart')
                    })
                    ;

            }
          
            req.session.destroy(function(err) {  //session is getting destroyed
                console.log('cannot access session here')
             })
            return res.redirect('/')
        }
    }
}


module.exports = cart_controller;