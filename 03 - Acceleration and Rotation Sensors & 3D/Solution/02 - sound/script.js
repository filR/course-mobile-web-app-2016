'use strict';

// play music
let audio = new Audio('song.mp3');
audio.play();


// on acceleratin sensor data
function handleMotionEvent(event) {
    let x = event.acceleration.x || event.accelerationIncludingGravity.x;
    let y = event.acceleration.y || event.accelerationIncludingGravity.y;
    let z = event.acceleration.z || event.accelerationIncludingGravity.z - 9.8;
    
    // get positive acceleration
    let targetVolume = Math.max(x, y, z);
    targetVolume = Math.abs(targetVolume);
    
    // scale it down a bit
    targetVolume /= 3;
    
    // minimum threshold
    if (targetVolume < 0.1) {
        targetVolume = 0;
    }
    
    // don't be more than 1.0 (max volume)
    targetVolume = Math.min(targetVolume, 1.0);
    
    // slowly approach target
    let difference = targetVolume - audio.volume;
    difference = Math.min(difference, 1.0);
    difference /= 10;
    
    // set volume
    audio.volume += difference;
}

window.addEventListener("devicemotion", handleMotionEvent, true);
