console.log("JavaScript on point");
function plusSlides(id) {
    id = parseInt(id);
    if(id == -1) {
        console.log("previous slide");
    } else if(id == 1) {
        console.log("next slide");
    }
}
const prevButton = document.querySelector("svg#prev-btn");
const nextButton = document.querySelector("svg#nxt-btn");
const prevBtnPaths = document.querySelectorAll("svg#prev-btn > path");
const nextBtnPaths = document.querySelectorAll("svg#nxt-btn > path");

prevButton.onclick = function() {
    nextBtnPaths.forEach((path)=>{
        path.setAttribute("stroke", "#000000");
        path.setAttribute("stroke-opacity", "0.53");
    })
    prevBtnPaths.forEach((path)=>{
        path.setAttribute("stroke", "#3269F9");
        path.setAttribute("stroke-opacity", "1");
    })
    plusSlides(-1);
};
nextButton.onclick = function() {
    prevBtnPaths.forEach((path)=>{
        path.setAttribute("stroke", "#000000");
        path.setAttribute("stroke-opacity", "0.53");
    })
    nextBtnPaths.forEach((path)=>{
        path.setAttribute("stroke", "#3269F9");
        path.setAttribute("stroke-opacity", "1");
    })
    plusSlides(1);
};
//stroke="#3269F9"; stroke-opacity
//  [2].setAttribute("stroke", "#3269F9");
// prevBtnPaths[2].setAttribute("stroke-opacity", "1");

