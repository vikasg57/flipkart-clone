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