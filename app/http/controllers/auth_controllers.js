function auth_controller(){
    //factry funtion returns object
    //now  we are using factory functions
    return {
        //only to read page
    login ( req,res) {

        try{
            res.render('auth/login')

        }catch{
            res.send("oooooooppps  errrorr ")
        }
        },
        register( req,res) {

            try{
                res.render('auth/register')
    
            }catch{
                res.send("oooooooppps  errrorr ")
            }
            }

    }
}
module.exports=auth_controller;