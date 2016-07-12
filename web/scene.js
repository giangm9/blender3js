var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;

var container;
var camera, scene;
var renderer;

init();
animate();

function init() {
    container = document.getElementById('container');
    camera = new THREE.PerspectiveCamera(30, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000);
    camera.position.z = 10;
    scene = new THREE.Scene();


    renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    renderer.setClearColor(0xffffff);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    renderer.domElement.style.position = "relative";
    container.appendChild(renderer.domElement);

    var loader = new THREE.ObjectLoader();
    loader.load("res/simple.json", function(loadedScene) {
        scene = loadedScene;
        scene.add(camera);
        scene.fog = new THREE.Fog(0xffffff, 2000, 10000);
        
        cube = scene.children[1];
        cube.material.skinning = true;
        bones = cube.skeleton.bones;

    });
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {

    camera.position.x = 5;
    camera.position.y = 6;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
}