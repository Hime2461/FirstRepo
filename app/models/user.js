//database collection


//module represents table/collection content f database
const mongoose=require('mongoose')

const validator=require('validator')
const Schema=mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
       type:String,
        required:true
    },
    role:{
        type:String,
        default:'customer'
    }
},{timestamps:true})

const User=mongoose.model('user',Schema) //collection get created of menu name

module.exports=User;
