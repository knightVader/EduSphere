let bars=document.querySelector(".bars");
let xmark=document.querySelector(".xmark");
let sidepanel=document.querySelector(".sidepanel");

bars.addEventListener("click", ()=>{
    bars.style.display="none";
    sidepanel.style.display="block";
})

xmark.addEventListener("click", ()=>{
    bars.style.display="block";
    sidepanel.style.display="none";
})