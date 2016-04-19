var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// canvas properties
var game = {
    ctx: canvas.getContext('2d'),
    width: canvas.width,
    height: canvas.height
};


// player paddles properties
var paddle = {
    width: canvas.width / 50,
    height: canvas.height / 5,
    speed: canvas.height / 50
};


// ball
var ball = {
    x: 50,
    y: 50,
    radius: canvas.width / 50,
    speedX: canvas.width / 100,
    speedY: canvas.width / 500,
    color: '#E3EB64'
};


// players
var p1 = {
    x: 10,
    y: game.height / 2 - paddle.height / 2,
    color: "#A7EBCA"
};

var p2 = {
    x: game.width - 10 - paddle.width,
    y: game.height / 2 - paddle.height / 2,
    color: "#A7EBCA"
};


// reset ball
function new_ball() {
    
    // position
    ball.x = game.width / 2;
    ball.y = game.height / 2;
    
    // speed
    var rand = Math.random() * 6 + 4;
    ball.speedX = (Math.random() > 0.5) ? rand : -rand;
    ball.speedY = (Math.random() > 0.5) ? rand : -rand;
}

new_ball(); // random speed for first game


// draw everything
function draw() {
    getGamepadInput();
    clear(game.ctx, game.width, game.height);

   
    // INSERT CODE HERE
    
}

// run draw() every 30ms
setInterval(draw, 30);
