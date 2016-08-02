/// <reference path="three.d.ts" />


class ThreeJSTest {
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.Camera;

    constructor(){
        // Create the renderer, in this case using WebGL, we want an alpha channel
        this.renderer = new THREE.WebGLRenderer({ alpha: true });

        // Set dimensions to 500x500 and background color to white
        this.renderer.setSize(500,500);
        this.renderer.setClearColor(0xFFFFFF,1);

        // Bind the renderer to the HTML, parenting it to our 'content' DIV
        document.getElementById('content').appendChild(this.renderer.domElement);

        // Create a Scene
        this.scene = new THREE.Scene();

        // And a camera.  Set Field of View, Near and Far clipping planes
        this.camera = new THREE.PerspectiveCamera(45
            , 1
            , 0.1, 1000);

        // Position is -20 along the Z axis and look at the origin
        this.camera.position = new THREE.Vector3(0,0,-20);
        this.camera.lookAt(new THREE.Vector3(0,0,0));

        // Createa the geometry for a sphere with a radius of 5
        var sphereGeometry = new THREE.SphereGeometry(5);

        // Create a wireframe material that's blueish
        var sphereMaterial = new THREE.MeshBasicMaterial(
            {color: 0x7777ff, wireframe: true});

        // Now make a THREE.Mesh using the geometry and a shader
        var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);

        // And put it at the origin
        sphere.position = new THREE.Vector3(0,0,0);

        // Add it to the scene and render the scene using the Scene and Camera objects
        this.scene.add(sphere);
        this.renderer.render(this.scene,this.camera);
    }

    start() {
        // Well, arent I a bit pointless?
    }
}

window.onload = () => {
    var three = new ThreeJSTest();
    three.start();
};