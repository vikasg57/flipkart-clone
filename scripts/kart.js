import {header, footer} from "../components/header.js"

document.getElementById("nav").innerHTML=header();



let data=JSON.parse(localStorage.getItem("cartarray"))
let y=document.getElementById("left")
console.log(data)
let x=``; 
data.forEach((ele)=>{
x+=`  <div id="box">
<div id="im"> <img src="${ele.image}" ></div>
<div><h4  class="cont">${ele.name}</h4>
<p class="manu">${ele.manufacturer}</p>
<span>₹${ele.price}</span><span>20% off</span><span> 4 offers applied</span><br>
<div><button class="inc">-</button>1<button class="dec">+</button><button class="rem">Remove</button></div>
<button class="button1" id="button1">Place Order</button>
           
</div>
<div > <p class="side">Delivery by Mon Feb 7 | Free</p>
<p class="side">7 Days Replacement Policy</p>
</div>

</div>`
 
})
y.innerHTML=x; 