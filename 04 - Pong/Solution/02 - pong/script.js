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

    // someone scores
    if (ball.x < 0 || ball.x > game.width) {
        new_ball();
    }

    // move paddles
    p1.y += p1_direction * paddle.speed;
    p2.y += p2_direction * paddle.speed;
    
    // paddle hits bottom of screen
    if (p1.y < 0) {
        p1.y = 0;
    }
    if (p2.y < 0) {
        p2.y = 0;
    }
    
    // paddle hits top of screen
    if (p1.y + paddle.height > game.height) {
        p1.y = game.height - paddle.height;
    }
    if (p2.y + paddle.height > game.height) {
        p2.y = game.height - paddle.height;
    }

    // collision paddle to ball
    if (ball.x + ball.radius >= p2.x &&
        ball.y + ball.radius >= p2.y &&
        ball.y - ball.radius <= p2.y + paddle.height
    ) {
        ball.speedX *= -1.1;
    }
    if (ball.x - ball.radius <= p1.x + paddle.width &&
        ball.y + ball.radius >= p1.y &&
        ball.y - ball.radius <= p1.y + paddle.height
    ) {
        ball.speedX *= -1.1;
    }

    // collision ball to wall (top&bottom)
    if (ball.y + ball.radius > game.height) {
        ball.speedY *= -1.1;
    }
    if (ball.y - ball.radius < 0) {
        ball.speedY *= -1.1;
    }

    // ai for first p1
    // p1.y = ball.y - paddle.height / 2;

    // draw paddles
    drawRectangle(game.ctx,
        p1.x, p1.y,
        paddle.width, paddle.height,
        p1.color
    );
    drawRectangle(game.ctx,
        p2.x, p2.y,
        paddle.width, paddle.height,
        p2.color
    );

    // draw ball
    drawCircle(game.ctx, ball.x, ball.y, ball.radius, ball.color);

    // move ball
    ball.x += ball.speedX;
    ball.y += ball.speedY;
}

// ideally we'd use requestAnimationFrame,
// but then we'd have to check passed time to determine speed
setInterval(draw, 30);
