'use strict';

const COLOR_MULTIPLIER = 50;

// -- acceleration
let sliderX = document.querySelector('#x');
let sliderY = document.querySelector('#y');
let sliderZ = document.querySelector('#z');
let indicator = document.querySelector('.indicator');

function handleMotionEvent(event) {
    let x = event.acceleration.x || event.accelerationIncludingGravity.x;
    let y = event.acceleration.y || event.accelerationIncludingGravity.y;
    let z = event.acceleration.z || event.accelerationIncludingGravity.z - 9.8;

    sliderX.value = x;
    sliderY.value = y;
    sliderZ.value = z;
    
    for (let i of [x, y, z]) {
        if (i > 0.5) {
            // console.log(i);
        }
    }    
    
    // set colour of indicator
    let value = Math.max(x, y, z);
    value *= COLOR_MULTIPLIER;
    value = Math.round(value);
    value = Math.min(value, 100);
    let color = `hsl(0, ${value}%, 50%)`;
    indicator.style.backgroundColor = color;
}
window.addEventListener("devicemotion", handleMotionEvent, true);



// -- rotation
window.addEventListener('deviceorientation', function(e) {
//  console.log(event.alpha + ' : ' + event.beta + ' : ' + event.gamma);
    
    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Using_device_orientation_with_3D_transforms
    document.querySelector('img').style.transform =
    "rotateY(" + ( -e.gamma ) + "deg)" +
    "rotateX(" + e.beta + "deg) " +
    "rotateZ(" + - ( e.alpha - 180 ) + "deg) ";
});
