import {header, footer} from "../components/header.js"

 //import{getproduct} from "./data.js"

document.getElementById("nav").innerHTML=header();



let data=JSON.parse(localStorage.getItem("cartarray")) || []



  // async function getdata(api) {

  //       try {
  //           let res = await getproduct(api)
  //           console.log(res)
  //          displaycart(res)
  //       }
  //       catch (er) {
  //           console.log(er)
  //       }

  // }




  // getdata("http://localhost:8500/cart")

 


let y=document.getElementById("le")
let x=``; 
let top=0;
let multi=1

 displaycart(data)
function displaycart(data){
     y.innerHTML=""


    data.forEach((ele,i)=>{

        multi=ele.price*70
        multi=Math.floor(multi)
          // multi=multi.replace(/\B(?=(\d{3})+(?!\d))/g, ",")

        x+=`  <div id="box">
        <div id="im"> <img src="${ele.image}" ></div>
        <div><h4  class="cont">${ele.name}</h4>
        <p class="manu">${ele.manufacturer}</p>
        <span>₹${multi}</span><span>20% off</span><span> 4 offers applied</span><br>
        <div><button class="inc">-</button>1<button class="dec">+</button><button class="rem">Remove</button></div>
        <button class="button1" id="button1">Place Order</button>
                  
        </div>
        <div > <p class="side">Delivery by Mon Feb 7 | Free</p>
        <p class="side">7 Days Replacement Policy</p>
        </div>

        </div>`
        
        top+=multi; 
    
      })
y.innerHTML=x; 


// deleteproduct(`http://localhost:8500/cart/${ele._id}`)
let remove=document.querySelectorAll('.rem')


remove.forEach((el,i)=>{

   el.addEventListener('click',function(){
     console.log(i)
    deleteproduct(i)
})


})




let order=document.querySelectorAll('#button1')

order.forEach((el,i)=>{
  el.addEventListener("click",function(){
    window.location.href="checkout.html"
  })
})

}

   
  let b=Math.floor(top*0.2); 
  let a =top- b
   a=a.toLocaleString()

 console.log(a)





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


  function deleteproduct(i){
    data.splice(i,1)
    localStorage.setItem("cartarray",JSON.stringify(data))
    document.location.reload()

  }

    // async function deleteproduct(url) {
    //     try {

    //         let response = await fetch(url,{
    //            method:"DELETE",
            
    //            headers:{
    //                "Content-Type":'application/json'
    //            }
    //         })

    //         let d = await response.json()
    //        console.log(d)

    //         // appenddata(data.data)

    //     }
    //     catch (er) {
    //         console.log(er)
    //     }

    // }



