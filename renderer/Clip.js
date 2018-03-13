/**
 * A 3D clip
 */

import * as THREE from './libs/three.js';
import Load       from './BlendLoader.js';
import Helpers    from './Helpers.js';
import Anims      from './Anims.js';
import './OrbitControls.js';

const CONTROL_MIN_DISTANCE = 10;
const CONTROL_MAX_DISTANCE = 50;


/**
 * 
 * @param {string} url : the url to the file
 * @param {domElement} container : the containter of the Clip
 * @param {function()} callback: callback function when load success
 */
function Clip( url, container, callback ){
  console.log("Clip");

  this.container  = container;
  this.renderer   = new THREE.WebGLRenderer({ antialias : true });
  this.animations = null;
  this.camera     = null;
  this.scene      = null;
  this.clock      = null;

  var width, height;
  var controls;

  /**
   * fix to disable "extension 'GL_ARB_gpu_shader5' is not supported" log
   * @see https://github.com/mrdoob/three.js/issues/9716
   */
  this.renderer.context.getShaderInfoLog = function () { return '' };
  width = this.size().width;
  height = this.size().height;

  this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

  this.container.appendChild(this.renderer.domElement);

  controls.maxPolarAngle = Math.PI * 0.5;
  controls.minDistance = CONTROL_MIN_DISTANCE;
  controls.maxDistance = CONTROL_MAX_DISTANCE;


  Load(url, function( scene ) {
    this.scene = scene;
    this.anims = new Anims( scene );
    this.clock = new THREE.Clock();
    this.state = 'idle';
    this.time  = 0;
    this.loop  = false;
    this.helper = new Helpers( scene );

    global.scene = this.scene;

    this.scene.background = new THREE.Color( 0xaaaadf );
    this.enableShadow();
    controls.reset();

    this.animate();
    if (callback){
      callback(this);
    }
  }.bind(this));
}

Clip.prototype.play = function(){
  this.state = 'play'
}

Clip.prototype.pause = function(){
  this.state = 'pause';
}

Clip.prototype.size = function(){
  return {
    width: this.container.clientWidth,
    height: this.container.clientHeight
  }
}

Clip.prototype.updateAnimation = function(delta){
  this.anims.update(delta);
}

Clip.prototype.animate = function () {
  var size = this.size();
  requestAnimationFrame(this.animate.bind(this));
  this.renderer.setSize(size.width, size.height);
  this.renderer.render(this.scene, this.camera);
  this.updateAnimation(this.clock.getDelta());
};

Clip.prototype.size = function () {
  return {
    width: this.container.clientWidth,
    height: this.container.clientHeight
  }
}

Clip.prototype.enableShadow = function(){
  this.renderer.shadowMap.enabled = true;
  this.scene.children.forEach( function( obj ) {
    if ( obj.isLight ) {
      obj.castShadow = true;
    } 

    if ( obj.isMesh ) {
      obj.receiveShadow = true;
    }
  })
}
export default Clip
