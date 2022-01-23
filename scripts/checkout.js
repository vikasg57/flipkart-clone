  
  import {header} from "../components/header.js"

  let head=document.querySelector('header')

  head.innerHTML=header()
   
   
   document.querySelector("#button").addEventListener('click',makepayment)
    function makepayment(){
        var num = document.querySelector("#num").value
        var pass = document.querySelector("#pass").value
        var expiry = document.querySelector("#expiry").value

       if(num=="11001100" && pass=="123" && expiry=="2022-05"){
           console.log("vikas")
           alert("payment Sucessful")

           window.location.href="home.html"
        
       }
       else{
           alert("payment failed")
           
         
       }


    }