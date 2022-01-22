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


const api1 = `http://127.0.0.1:4000/api/laptop1`

const api2 = `http://127.0.0.1:4000/api/camera1`

const api3 = `http://127.0.0.1:4000/api/tv1`

const api4 = `http://127.0.0.1:4000/api/mobile1`

const api5= `http://127.0.0.1:4000/api/watch1`


getproduct(api3,dynamic1)
getproduct(api4,dynamic2)
getproduct(api2,dynamic3)
getproduct(api5,dynamic4)
getproduct(api1,dynamic5)



async function getproduct(url,location) {
    try {

        let response = await fetch(url)

        let data = await response.json()
        console.log(data) 

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
        <div id="recommend">
        
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


document.getElementById("mlog").addEventListener("click", function(){
    document.querySelector(".bg-modal").style.display="flex";
    console.log("here")
})
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".bg-modal").style.display="none";
})

let x=JSON.parse(localStorage.getItem("mobile"));
 
document.getElementById("mobile").value=x; 

document.getElementById("log").addEventListener("click", function(){

    document.querySelector(".bg-modal").style.display="none";
})

// sign up 
//document.querySelector(".bg-modal").style.display="none";
 
// let go=()=>{
//     let x= document.getElementById("mobile").value; 
//     localStorage.setItem("mobile",JSON.stringify(x));
//  }

