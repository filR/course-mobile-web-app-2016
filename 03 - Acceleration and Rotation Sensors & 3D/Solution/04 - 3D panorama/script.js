'use strict';

// code from https://github.com/mrdoob/three.js/blob/master/examples/css3d_panorama_deviceorientation.html

let controls, camera, scene, renderer;
let geometry, material, mesh;

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

    controls = new THREE.DeviceOrientationControls(camera);
    scene = new THREE.Scene();

    var sides = [
        {
            url: 'images/bridge/posx.jpg',
            position: [-512, 0, 0],
            rotation: [0, Math.PI / 2, 0]
					},
        {
            url: 'images/bridge/negx.jpg',
            position: [512, 0, 0],
            rotation: [0, -Math.PI / 2, 0]
					},
        {
            url: 'images/bridge/posy.jpg',
            position: [0, 512, 0],
            rotation: [Math.PI / 2, 0, Math.PI]
					},
        {
            url: 'images/bridge/negy.jpg',
            position: [0, -512, 0],
            rotation: [-Math.PI / 2, 0, Math.PI]
					},
        {
            url: 'images/bridge/posz.jpg',
            position: [0, 0, 512],
            rotation: [0, Math.PI, 0]
					},
        {
            url: 'images/bridge/negz.jpg',
            position: [0, 0, -512],
            rotation: [0, 0, 0]
					}
				];
    
    var cube = new THREE.Object3D();
    scene.add(cube);
    
    for (var i = 0; i < sides.length; i++) {
        var side = sides[i];
        var element = document.createElement('img');
    
        element.width = 1026; // 2 pixels extra to close the gap.
        element.src = side.url;
        
        var object = new THREE.CSS3DObject(element);
        object.position.fromArray(side.position);
        object.rotation.fromArray(side.rotation);
        
        cube.add(object);
    }
    
    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}