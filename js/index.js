// GALLERY SECTION
// CONTROL THE IMAGE SLIDE
console.log("JavaScript on point");
const prevButton = document.querySelector("svg#prev-btn");
const nextButton = document.querySelector("svg#nxt-btn");
const prevBtnPaths = document.querySelectorAll("svg#prev-btn > path");
const nextBtnPaths = document.querySelectorAll("svg#nxt-btn > path");
const imageCont = document.querySelector("#image-container");
prevButton.onclick = function() {
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
nextButton.onclick = function() {
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
//stroke="#3269F9"; stroke-opacity
//  [2].setAttribute("stroke", "#3269F9");
// prevBtnPaths[2].setAttribute("stroke-opacity", "1");

/*
<p><button class="target">Target</button></p>

<p>Status: <span class="status" /><p>


// This timeout, started on mousedown, triggers the beginning of a hold
var holdStarter = null;

// This is how many milliseconds to wait before recognizing a hold
var holdDelay = 500;

// This flag indicates the user is currently holding the mouse down
var holdActive = false;

// MouseDown
$('.target').mousedown(onMouseDown);
function onMouseDown(){
    // Do not take any immediate action - just set the holdStarter
    //  to wait for the predetermined delay, and then begin a hold
    holdStarter = setTimeout(function() {
		holdStarter = null;
		holdActive = true;
		// begin hold-only operation here, if desired
        $('.status').text('holding...');
	}, holdDelay);
}

// MouseUp
$('.target').mouseup(onMouseUp);
function onMouseUp(){
    // If the mouse is released immediately (i.e., a click), before the
    //  holdStarter runs, then cancel the holdStarter and do the click
	if (holdStarter) {
		clearTimeout(holdStarter);
		// run click-only operation here
        $('.status').text('Clicked!');
	}
    // Otherwise, if the mouse was being held, end the hold
	else if (holdActive) {
		holdActive = false;
		// end hold-only operation here, if desired
        $('.status').text('');
	}
}

// OnClick
// not using onclick at all - onmousedown and onmouseup take care of everything

// Optional add-on: if mouse moves out, then release hold
$('.target').mouseout( function(){
    onMouseUp();
});



*/