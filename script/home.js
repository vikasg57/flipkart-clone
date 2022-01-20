let id; 
let img_arr=["https://storiesflistgv2.blob.core.windows.net/stories/2018/10/BBDTipSheet_mainbanner.jpg",
"https://cdn.static-zoutons.com/images/originals/blog/1_46_1623336034.png",
"https://images.freekaamaal.com/post_images/1594014935.png",
"https://images.indianexpress.com/2020/10/Untitled-design-2020-10-15T171350.830.jpg",
"https://rukminim1.flixcart.com/flap/1800/1800/image/55e17a71cf54b644.jpg?q=80"

]
let img=document.createElement("img");
img.src=img_arr[0];
let i=1; 

id=setInterval(function(){
    if(i==img_arr.length){
        i=0; 
    }
    img.src=img_arr[i];
 let div1= document.getElementById("slides")
 div1.append(img);
 i++; 
},3000)
