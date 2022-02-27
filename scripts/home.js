import {header,footer} from "../components/header.js"

let s=document.getElementById("nav").innerHTML=header();
let p=document.getElementById("foot").innerHTML=footer();


let id; 
let img_arr=["https://rukminim1.flixcart.com/flap/1700/1700/image/c7a5f63b8e7be741.png?q=50",
"https://rukminim1.flixcart.com/flap/1700/1700/image/735613597f70f882.jpg?q=50",
"https://rukminim1.flixcart.com/flap/1700/1700/image/0db0ad0ee86fcb8f.jpg?q=50",
"https://rukminim1.flixcart.com/flap/1700/1700/image/6cdb1fd8ccad35ca.jpg?q=50",
"https://rukminim1.flixcart.com/flap/1700/1700/image/ad1e075bbad574c1.jpg?q=50"

]
let img=document.createElement("img");
img.src=img_arr[0];
let i=1; 

id=setInterval(function(){
    if(i==img_arr.length){
        i=0; 
    }
    img.src=img_arr[i];
 let div1= document.getElementById("slide")
 div1.append(img);
 i++; 
},3000)






let dynamic1 = document.querySelector('#dynamic1')
let dynamic2 = document.querySelector('#dynamic2')
let dynamic3 = document.querySelector('#dynamic3')
let dynamic4 = document.querySelector('#dynamic4')
let dynamic5 = document.querySelector('#dynamic5')


const api1 = `https://flipkart-backendserver.herokuapp.com/laptop`

const api2 = `https://flipkart-backendserver.herokuapp.com/camera`

const api3 = `https://flipkart-backendserver.herokuapp.com/tv`

const api4 = `https://flipkart-backendserver.herokuapp.com/mobile`

const api5= `https://flipkart-backendserver.herokuapp.com/watch`


getproduct(api3,dynamic1)
getproduct(api4,dynamic2)
getproduct(api2,dynamic3)
getproduct(api5,dynamic4)
getproduct(api1,dynamic5)



async function getproduct(url,location) {
    try {

        let response = await fetch(url)

        let data = await response.json()
        //console.log(data) 

        recommend(data,location)
        



    }
    catch (er) {
        console.log(er)
    }

}





function recommend(data,location){

    let x=``
    let multi=1

    data.forEach((el)=>{

        let{image,manufacturer,price}=el
        multi=price*70
         multi=multi.toFixed()
         multi=multi.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        

        x +=`
        <div id="recommend" class="w-[500px]">
        
            <img src="${image}" alt="">
            <h3>${manufacturer}</h3>
            <h3>₹${multi}</h3>
        </div>`

        location.innerHTML=x

        // let xyz=document.querySelectorAll('#recommend')

        // xyz.forEach((ele,i)=>{

        //     ele.addEventListener('click',function(){

        //         console.log(data[i])

        //     })

        // })



    })

}
// login 
document.querySelector(".bg-modal").style.display="none";
document.body.style.background="white"

document.getElementById("mlog").addEventListener("click", function(){
    document.querySelector(".bg-modal").style.display="flex";
    document.body.style.background="grey";
    console.log("here")
})
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".bg-modal").style.display="none";
    document.body.style.background="white"
})

let x=JSON.parse(localStorage.getItem("mobile"));
 
document.getElementById("mobile").value=x; 

document.getElementById("log").addEventListener("click", async function(){
         
    let obj={};

    obj={
        email:document.getElementById("mobile").value, 
        password:document.getElementById("pass").value
    }
    let data=JSON.stringify(obj);
    //console.log(data);

    let res= await fetch("https://flipkart-backendserver.herokuapp.com/register",{
        method:"POST",
        body:data,
        headers:{
            "Content-Type":'application/json'
        }
        
    })
    let da=await res.json();

        console.log(da);
    document.querySelector(".bg-modal").style.display="none";
    document.body.style.background="white"
})

//sign up 
document.querySelector(".bg-modal2").style.display="none";

document.querySelector(".signup").addEventListener("click",function(){
    sopen();
})
function sopen(){
    document.querySelector(".bg-modal").style.display="none";
    document.querySelector(".bg-modal2").style.display="flex";
}
document.querySelector(".close2").addEventListener("click",function(){
    document.querySelector(".bg-modal2").style.display="none";
    document.body.style.background="white"
})

 document.querySelector("#logs").addEventListener("click",function(){
     go();
 })
 
 function go(){
    document.querySelector(".bg-modal2").style.display="none";
    document.querySelector(".bg-modal").style.display="flex";
    
    localStorage.setItem("mobile",JSON.stringify(x));
 }

 document.getElementById("catep").addEventListener("click",function(){
     pro();
 })

 function pro(){
     window.location.href="./products.html"
 }
