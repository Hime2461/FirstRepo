//controllers use to handle post n logic what to show after get request

const Menu=require('../../models/menu')

function home_controller(){
    //factry funtion returns object
    //now  we are using factory functions
    return {
        //only to read page
    index ( req,res) {
        try{
           const mess= Menu.find().then(function(mess){
               return res.render('home',{messes:mess})
            })
          

        }catch{
            res.send("oooooooppps  errrorr ")
        }
        }
    }
}
module.exports=home_controller;