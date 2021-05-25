import axios from 'axios';

import Noty from 'noty'; //to add notification effect

let addtocart = document.querySelectorAll('.add-to-cart')
let cartcounter=document.querySelector('#cartCounter')

function updatecart(data){
 axios.post('/updatecart',data).then((res)=>{    
     cartcounter.innerHTML=res.data.totqty   
     new Noty({
         type:'success',
         text: "Item added!!",
         timeout:0.5*1000,
         progressBar:false
       
       }).show();
    // alert("data added")
 }).catch((e)=>{
    new Noty({
        type:'error',
        text: "Error!!",
        timeout:0.5*1000,
        progressBar:false
      
      }).show();
 })
}


addtocart.forEach((btn) => {
    btn.addEventListener('click', () => {
      
       let data = JSON.parse(btn.dataset.mess)
        updatecart(data)
    }
    )
})