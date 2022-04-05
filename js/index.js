// GALLERY SECTION
// CONTROL THE IMAGE SLIDE
console.log("JavaScript on point");
const nxt = document.querySelector("button#nxt");
const prev = document.querySelector("button#prev");
const prevBtnPaths = document.querySelectorAll("svg#prev-btn > path");
const nextBtnPaths = document.querySelectorAll("svg#nxt-btn > path");
const imageCont = document.querySelector("#image-container");
prev.onclick = function() {
    nextBtnPaths.forEach((path)=>{
        path.setAttribute("stroke", "#000000");
        path.setAttribute("stroke-opacity", "0.53");
    })
    prevBtnPaths.forEach((path)=>{
        path.setAttribute("stroke", "#3269F9");
        path.setAttribute("stroke-opacity", "1");
    })
    imageCont.scrollLeft -= 100;
};
nxt.onclick = function() {
    prevBtnPaths.forEach((path)=>{
        path.setAttribute("stroke", "#000000");
        path.setAttribute("stroke-opacity", "0.53");
    })
    nextBtnPaths.forEach((path)=>{
        path.setAttribute("stroke", "#3269F9");
        path.setAttribute("stroke-opacity", "1");
    })
    imageCont.scrollLeft += 100;
};
