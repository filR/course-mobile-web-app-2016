var p1_direction = 0;
var p2_direction = 0;



// ------------------
// -- handle input --
// ------------------

document.onkeydown = function(ev) {
	switch(ev.keyCode) 	{
		case 87: // w
			p1_direction = -1;
			break;
		case 83: // s
			p1_direction = 1;
			break;
		case 38: // up
			p2_direction = -1;
			break;
		case 40: // down
			p2_direction = 1;
			break;
	}
};

document.onkeyup = function(ev) {
	switch(ev.keyCode) 	{
		case 87: // w
		case 83: // s
			p1_direction = 0;
			break;
		case 38: // up
		case 40: // down
			p2_direction = 0;
			break;
	}
};

function getGamepadInput() {
    if(!!navigator.getGamepads) {
        var gamepad = navigator.getGamepads()[0];

        if (gamepad) {
            p2_direction = gamepad.axes[3] * 2;
            p1_direction = gamepad.axes[1] * 2;
        }
    }
}



// ------------------------------
// -- canvas drawing functions --
// ------------------------------

function drawRectangle(ctx, x, y, width, height, color) {
	ctx.fillStyle = (color)? color : "white";
	ctx.beginPath();
	ctx.rect(x, y, width, height);
	ctx.closePath();
	ctx.fill();
}

function drawCircle(ctx, x, y, radius, color) {
	ctx.fillStyle = (color)? color : "white";
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();
}

function drawText(ctx, x, y, txt, font, color) {
	ctx.fillStyle = (color)? color : "white";
	ctx.font = (font)? font : "bold 18px sans-serif";
	ctx.fillText(txt, x, y);
}

function clear(ctx, width, height) {
	ctx.clearRect(0, 0, width, height);
}
