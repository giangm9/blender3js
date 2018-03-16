import * as THREE from './libs/three.js';
import Helpers    from './Helpers.js';
import './OrbitControls.js';
import './GLTFLoader.js';


const CONTROL_MIN_DISTANCE = 10;
const CONTROL_MAX_DISTANCE = 1000; 

function GLTFClip( url, container, callback ) {
  this.container  = container;
  this.renderer   = new THREE.WebGLRenderer({ antialias : true });
  this.animations = null;
  this.camera     = null;
  this.scene      = new THREE.Scene();//null;
  this.clock      = null;
  this.control    = null;

  var width, height;

  /**
   * fix to disable "extension 'GL_ARB_gpu_shader5' is not supported" log
   * @see https://github.com/mrdoob/three.js/issues/9716
   */
  this.renderer.context.getShaderInfoLog = function () { return '' };
  width  = this.container.clientWidth;
  height = this.container.clientHeight;
  this.camera   = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 1000000 );
  this.controls = new THREE.OrbitControls( this.camera );
  this.controls.target.set( 0, 0, 0 );
  this.controls.maxPolarAngle = Math.PI * 0.5;
  this.controls.minDistance = CONTROL_MIN_DISTANCE;
  this.controls.maxDistance = CONTROL_MAX_DISTANCE;
  this.controls.update();


  this.clock  = new THREE.Clock();


  var loader = new THREE.GLTFLoader();

  loader.load( url, function( gltf ) {
    global.gltf = gltf;
    this.animations = gltf.animations;
    this.mixer = new THREE.AnimationMixer( gltf.scene);

    if ( this.animations && this.animations.length ) {
      for ( var i = 0; i < this.animations.length; i ++ ) {
        var animation = this.animations[ i ];
        // There's .3333 seconds junk at the tail of the Monster animation that
        // keeps it from looping cleanly. Clip it at 3 seconds
        //        if ( sceneInfo.animationTime )
        //          animation.duration = sceneInfo.animationTime;
        //        animation.duration = 0.333;
        this.mixer.clipAction( animation ).play();
      }

    }
    //    this.scene = gltf.scene;
    var scale = 10;// 0.04
    gltf.scene.scale.x = scale;
    gltf.scene.scale.y = scale;
    gltf.scene.scale.z = scale;
    console.log(gltf);

    this.scene.add(gltf.scene);

    this.scene.background = new THREE.Color( 0xaaaadf );
    this.helper = new Helpers( this.scene );
    var light = null;
    light = new THREE.HemisphereLight( 0xbbbbff, 0x444422 );
    light.position.set( 0, 1, 0 );
    this.scene.add( light );
    light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( -10, 6, -10 );
    this.scene.add( light );
    this.animate();
  }.bind(this) ,
    undefined,
    function ( error ){
      console.log( error );
    }
  );

  this.renderer.setPixelRatio( window.devicePixelRatio );
  this.renderer.setSize( window.innerWidth, window.innerHeight );
  this.container.appendChild( this.renderer.domElement );
}

GLTFClip.prototype.animate = function () {
  var width  = this.container.clientWidth;
  var height = this.container.clientHeight;
  requestAnimationFrame(this.animate.bind(this));
  this.renderer.setSize(width, height);
  this.renderer.render(this.scene, this.camera);
  if (this.mixer) this.mixer.update(this.clock.getDelta() * 3 ) ;
  //  this.updateAnimation(this.clock.getDelta());
};

export default GLTFClip;
