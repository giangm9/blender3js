/**
 * A 3D clip
 */

import * as THREE from './libs/three.js';
import Load from "./BlendLoader.js"
import "./OrbitControls.js"

const CONTROL_MIN_DISTANCE = 10;
const CONTROL_MAX_DISTANCE = 50;


function Clip(url, container, callback){
  this.container = container;
  this.renderer = new THREE.WebGLRenderer();

  // fix to disable "extension 'GL_ARB_gpu_shader5' is not supported" log
  // ref : https://github.com/mrdoob/three.js/issues/9716
  this.renderer.context.getShaderInfoLog = function () { return '' };

  var width = this.size().width;
  var height = this.size().height;
  var that = this;
  this.camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
  var controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

  container.appendChild(this.renderer.domElement);

  controls.maxPolarAngle = Math.PI * 0.5;
  controls.minDistance = CONTROL_MIN_DISTANCE;
  controls.maxDistance = CONTROL_MAX_DISTANCE;

  Load(url, function(scene) {
    this.scene = scene;
    controls.reset();
    this.animate();
    if (callback){
      callback(this);
    }
  }.bind(this));
}


Clip.prototype.play = function(){
  this.playing = true;

}
Clip.prototype.size = function(){
  return {
    width: this.container.clientWidth,
    height: this.container.clientHeight
  }
}

Clip.prototype.animate = function(){
  var size = this.size();
  requestAnimationFrame(this.animate.bind(this));
  this.renderer.setSize(size.width, size.height);
  this.renderer.render(this.scene, this.camera);
};

export default Clip
