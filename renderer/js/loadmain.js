/**
 * load main scene here
 */

var LoadMain = function(){
    this.name = "main";
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.container = document.getElementById("container");
    this.camera = new THREE.PerspectiveCamera(30, this.width / this.height);
    this.camera.position.x = 2;
    this.camera.position.y = -10;
    this.camera.position.z = 4;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0xffffff);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.domElement.style.position = "relative";
    this.container.appendChild(this.renderer.domElement);
    camera = this.camera;
    var loader = new THREE.ObjectLoader();
    loader.load("res/steve.json", (function(loadedScene){
        this.scene =  loadedScene;
        this.scene.add(this.camera);
    }).bind(this));

}

LoadMain.prototype.update = function(){
    //this.camera.position.x -= .05;
    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);
}


