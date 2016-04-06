'use strict';

// -- rotation
let rotation = {
    x: 0,
    y: 0,
    z: 0
}

window.addEventListener('deviceorientation', function (e) {
    rotation.x = e.beta * (Math.PI / 180);
    rotation.y = -e.gamma * (Math.PI / 180);
    rotation.z = -(e.alpha - 180) * (Math.PI / 180);
});



// -- 3d scene
// http://threejs.org/docs/#Manual/Introduction/Creating_a_scene

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// the cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
    color: 0xaaffaa
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// -- render loop
var render = function () {
    requestAnimationFrame(render);

//    cube.rotation.x += 0.1;
//    cube.rotation.y += 0.1;

//    cube.rotation.x = rotation.x;
//    cube.rotation.y = rotation.y;
//    cube.rotation.z = rotation.z;

    renderer.render(scene, camera);
};

render();
