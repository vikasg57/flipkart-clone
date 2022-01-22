import {header, footer} from "../components/header.js"

document.getElementById("nav").innerHTML=header();



let data=JSON.parse(localStorage.getItem("cartarray"))
let y=document.getElementById("le")
console.log(data)
let x=``; 
let top=0; 
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
 top+=ele.price; 
})
y.innerHTML=x; 
  let b=Math.floor(top*0.2); 
 let a =top- b
let z=` <div class="first"><H3>Price Details </H3></div>
<div><h4>Price <span class="tp1">₹ ${top}</span></h4>
<h4>Discount <span class="tp2"> -₹${b}</span></h4>
<h4>Delivery Charges <span class="tp">Free</span></h4></div>
<hr>
<div>
<h3> Total Amount  <span class="tp">₹ ${a}</span></h3>
</div>
<hr>
<h4>  You will Save ₹${b} on this order</h4>`
  document.getElementById("right").innerHTML=z; 