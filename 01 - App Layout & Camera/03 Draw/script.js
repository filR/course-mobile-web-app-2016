'use strict';

let brush_size = 30;
let currentColor = '#E3EB64';

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;



// STEP 1: draw circles on move

//function draw (e) {
//    let posX = e.pageX;
//    let posY = e.pageY;
//    
//    if (e.touches) {
//        posX = e.touches[0].pageX;
//        posY = e.touches[0].pageY;
//    }
//
////    ctx.fillRect(posX-5, posY-5, 10, 10);
//
//    ctx.beginPath();
//    ctx.arc(posX, posY, BRUSH_SIZE, 0, Math.PI * 2, true);
//    ctx.closePath();
//    ctx.fill();
//}
//
//canvas.addEventListener('mousemove', draw);
//canvas.addEventListener('touchmove', draw);



// STEP 2: draw lines

canvas.addEventListener('touchstart', startLine);
canvas.addEventListener('touchmove', drawLine);

function startLine(e) {
	ctx.beginPath();
    ctx.lineWidth = brush_size;
    ctx.lineCap = 'round';
    ctx.strokeStyle = currentColor;
	ctx.moveTo(e.touches[0].pageX, e.touches[0].pageY);
}

function drawLine(e) {
    ctx.lineTo(e.touches[0].pageX, e.touches[0].pageY);
    ctx.stroke();
}



// STEP 3: set colour

document.querySelector('[action=toggle-settings]').onclick = toggleOverlay;

function toggleOverlay() {
    $('.settings').toggle();
}

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