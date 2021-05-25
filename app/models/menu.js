//database collection


//module represents table/collection content f database
const mongoose=require('mongoose')

const validator=require('validator')
const Schema=mongoose.Schema({
    dish:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    pcs:{
        type:Number,
        required:true
    }
})

const Menu=mongoose.model('menu',Schema) //collection get created of menu name

module.exports=Menu;
