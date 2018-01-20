import * as BlendLoader from "./BlendLoader.js"

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var Scene = null
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI * 0.5;
controls.minDistance = 10;
controls.maxDistance = 50;


var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);

BlendLoader.load("res/anim.json", initScene)

function initScene(scene) {
	Scene = scene;
	scene.add(cube);
	var light = new THREE.AmbientLight(0x404040); // soft white light
	scene.add(light);
	camera.position.z = 5;
	animate();
}

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.1;
	cube.rotation.y += 0.1;
	if (Scene != null) {
		renderer.render(Scene, camera);
	}
};
