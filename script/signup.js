

 let go=()=>{
    let x= document.getElementById("mobile").value; 
    localStorage.setItem("mobile",JSON.stringify(x));
 }

 import navbar  from "../components/navbar.js";

 let x=navbar();
 document.getElementById("nav").innerHTML=x; 