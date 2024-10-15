let bars=document.querySelector(".bars");
let xmark=document.querySelector(".xmark");
let sidepanel=document.querySelector(".sidepanel");

bars.addEventListener("click", ()=>{
    bars.style.opacity="0";
    sidepanel.style.display="block";
})

xmark.addEventListener("click", ()=>{
    bars.style.opacity="1";
    sidepanel.style.display="none";
})