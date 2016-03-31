'use strict';

// our default draw values
let brush_size = 30;
let currentColor = '#E3EB64';

// get our canvas and initialiase it
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// set size to full page size
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;



// STEP 1: draw circles on move
//
//function draw (e) {
//    
//    // get the position of our mouse
//    let posX = e.pageX;
//    let posY = e.pageY;
//    
//    // get the position of our touch
//    if (e.touches) {
//        posX = e.touches[0].pageX;
//        posY = e.touches[0].pageY;
//    }
//
//    // step 1: draw a rectangle at that position
////    ctx.fillRect(posX-5, posY-5, 10, 10);
//
//    // step 2: draw a circle at that position
//    ctx.beginPath();
//    ctx.arc(posX, posY, brush_size, 0, Math.PI * 2, true);
//    ctx.closePath();
//    ctx.fillStyle = currentColor;
//    ctx.fill();
//}
//
//// whenever the mouse (or touch) moves, call the `draw` function
//canvas.addEventListener('mousemove', draw);
//canvas.addEventListener('touchmove', draw);



// STEP 2: draw lines

canvas.addEventListener('touchstart', startLine);
canvas.addEventListener('touchmove', drawLine);

// begin the line on a new touch
function startLine(e) {
	ctx.beginPath();
    ctx.lineWidth = brush_size;
    ctx.lineCap = 'round';
    ctx.strokeStyle = currentColor;
	ctx.moveTo(e.touches[0].pageX, e.touches[0].pageY);
}

// update line whenever the touch moves
function drawLine(e) {
    ctx.lineTo(e.touches[0].pageX, e.touches[0].pageY);
    ctx.stroke();
}



// STEP 3: set colour

// when the user touches the settings icon, call the function `toggleOverlay`
document.querySelector('[action=toggle-settings]').onclick = toggleOverlay;

function toggleOverlay() {
    $('.settings').toggle();
}

// when the user clicks on a `change-color` link, call the function `changeColor`
// in the lines above, we used vanilla JavaScript, here we use jQuery
$(document).on('click', '[action=change-color]', changeColor);

function changeColor() {
    currentColor = $(this).attr('color');
    $('.settings').hide();
    return false;
}


// STEP 4: set size


$(document).on('click', '[action=change-size]', changeSize);

function changeSize() {
    brush_size = $(this).attr('size');
    $('.settings').hide();
    return false;
}