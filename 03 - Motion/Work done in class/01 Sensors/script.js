function handleMotionEvent(event) {
    var x = event.acceleration.x || event.accelerationIncludingGravity.x;;
    var y = event.acceleration.y || event.accelerationIncludingGravity.y;;
    var z = event.acceleration.z || event.accelerationIncludingGravity.z;;

    // optional
    x = Math.round(x * 100) / 100;
    y = Math.round(y * 100) / 100;
    z = Math.round(z * 100) / 100;
    
    document.querySelector('#x').innerText = x;
    document.querySelector('#y').innerText = y;
    document.querySelector('#z').innerText = z;
    
    console.log(x, y, z);
    
    var max = Math.max(x, y, z); // highest acceleration
    
    max *= 20;
    max = Math.abs(max); // always positive
    max = Math.min(max, 100); // not more than 100
    max = Math.round(max);
    
    var color = 'hsl(0, ' + max + '%, 50%)';
    document.querySelector('body').style.background = color;
}

window.addEventListener("devicemotion", handleMotionEvent, true);













