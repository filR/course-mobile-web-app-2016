// keyboard ----
var keys = {};

window.onkeydown = function (e) {
    keys[e.keyCode] = true;
}

window.onkeyup = function (e) {
    delete keys[e.keyCode];
}


// game loop ----
var loop = function () {
    var gamepad = navigator.getGamepads()[0];
    var move = 0;

    // gamepad
    if (gamepad) {
        move = gamepad.axes[0] * 4;
    }
    
    // keyboard
    if (move === 0) {
        if (keys[37]) { // left
            move = -4;
        }
        
        if (keys[39]) { // right
            move += 4;
        }
    }

    // move player
    left = $('#player').position().left;
    $('#player').css('left', left + move);

    // start loop again
    window.requestAnimationFrame(loop);
};

loop();
