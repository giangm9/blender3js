/// <reference path="three/three.js" />



var Scene = function(){
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.container = document.getElementById("container");
    this.camera = new THREE.PerspectiveCamera(30, this.width / this.height);
    console.log(this.camera.position);    
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
    loader.load("res/simple.json", (function(loadedScene){
        this.scene =  loadedScene;
        this.scene.add(this.camera);
        var cube = this.scene.children[1];
        cube.material.skinning = true;
    }).bind(this));
    
    this.render();
}


Scene.prototype.render = function(){
    requestAnimationFrame(this.render.bind(this));
    this.camera.position.x -= .05;
    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);
};

var scene = new Scene();