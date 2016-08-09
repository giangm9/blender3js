/// <reference path="three/three.js" />


var PuppetScene = (function () {
    function PuppetScene() {
        var _this = this;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.render = function () {
            requestAnimationFrame(_this.render);
            _this.camera.position.x -= .05;
            _this.camera.lookAt(_this.scene.position);
            _this.renderer.render(_this.scene, _this.camera);
        };
        this.container = document.getElementById('container');
        this.camera = new THREE.PerspectiveCamera(30, this.width / this.height);
        this.camera.position.x = 5;
        this.camera.position.y = 6;
        this.camera.position.z = 10;
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setClearColor(0xffffff);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.renderer.domElement.style.position = "relative";
        this.container.appendChild(this.renderer.domElement);
        var loader = new THREE.ObjectLoader();
        loader.load("res/simple.json", function (loadedScene) {
            _this.scene = loadedScene;
            _this.scene.add(_this.camera);
            var cube = _this.scene.children[1];
            cube.material.skinning = true;
            var bones = cube.skeleton.bones;
        });
        this.render();
    }
    return PuppetScene;
}());
var s = new PuppetScene();

