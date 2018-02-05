import * as THREE from './three.js';
import load from "./BlendLoader.js"
import "./OrbitControls.js"


function render(name, container) {
	console.log("REDERING");
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.maxPolarAngle = Math.PI * 0.5;
	controls.minDistance = 2;
	controls.maxDistance = 50;
	var Scene = null;

	load(name, (scene) => {
		Scene = scene;
		var light = new THREE.PointLight(0xff0000, 1, 100);
		light.position.set(50, 50, 50);
		scene.add(light);
		console.log(Scene);
		animate();
	});


	function animate() {
		requestAnimationFrame(animate);
		renderer.render(Scene, camera);
	};
}

global.HMI3DRenderer= {
	render: render
}