document.getElementById("mlog").addEventListener("click", function(){
    document.querySelector(".bg-modal").style.display="flex";
    console.log("here")
})
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".bg-modal").style.display="none";
})