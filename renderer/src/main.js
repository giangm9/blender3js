import * as THREE from 'three';
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
	controls.minDistance = 10;
	controls.maxDistance = 50;
	var Scene = null;

	load(name, (scene) => {

		console.log("LOADED ", name)
		Scene = scene;
		var light = new THREE.AmbientLight(0x404040); // soft white light
		scene.add(light);
		camera.position.z = 5;
		animate();
	});


	function animate() {
		requestAnimationFrame(animate);

		if (Scene != null) {
			renderer.render(Scene, camera);
		}
	};
}

global.HMIRenderer = {
	render: render
}