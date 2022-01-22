import {header, footer} from "../components/header.js"

document.getElementById("nav").innerHTML=header();



let data=JSON.parse(localStorage.getItem("cartarray"))
let y=document.getElementById("left")
console.log(data)
let x=``; 
data.forEach((ele)=>{
x+=`  <div id="box">
<div id="im"> <img src="${ele.image}" ></div>
<div><h4>${ele.name}</h4>
<p>${ele.manufacturer}</p>
<span>₹${ele.price}</span><span>20% off</span><span> 4 offers applied</span>
</div>
<div> <p>Delivery by Mon Feb 7 | Free</p>
<p>7 Days Replacement Policy</p>
</div>
</div>`
 
})
y.innerHTML=x; 