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
document.querySelector(".bg-modal").style.display="none";