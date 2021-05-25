//controllers use to handle post n logic what to show after get request



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
            let cart=req.session.cart
                //check if item present ornot
                if(!cart.items[req.body._id]){  //not present
                    cart.items[req.body._id]={
                        item:req.body,
                        qty:1
                    }
                    cart.totquantity=cart.totquantity+1;
                    cart.totprice=cart.totprice+req.body.price;
                    
                }
                else{  //present--so increase only qty
                    cart.items[req.body._id].qty=    cart.items[req.body._id].qty+1;
                    cart.totquantity=cart.totquantity+1;
                    cart.totprice=cart.totprice+req.body.price;

                }
               
                
                return res.json({totqty:req.session.cart.totquantity})
                

    

        }
    }
}
module.exports = cart_controller;