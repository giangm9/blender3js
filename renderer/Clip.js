/**
 * A 3D clip
 */

import * as THREE from './libs/three.js';
import Load from "./BlendLoader.js";
import Stats from "./stats.js";
import "./OrbitControls.js";

const CONTROL_MIN_DISTANCE = 10;
const CONTROL_MAX_DISTANCE = 50;

function Clip() { }
Clip.enableStats = false;

Clip.prototype.size = function () {
  return {
    width: this.container.clientWidth,
    height: this.container.clientHeight
  }
}


/**
 * 
 * @param {Object} parameters 
 * @param {string} parameter.url : the url to the file
 * @param {domElement} parameters.container : the containter of the Clip
 * @param {function()} parameters.sucess : callback function when load success
 * @param {function(error)} parameters.error : callback function when load error  
 */
Clip.prototype.render = function (parameters){
  this.container = parameters.container;
  this.renderer = new THREE.WebGLRenderer({ antialias: true });
  this.stats = new Stats();
  container.appendChild(this.stats.dom);

  /**
   * fix to disable "extension 'GL_ARB_gpu_shader5' is not supported" log
   * @see https://github.com/mrdoob/three.js/issues/9716
   */
  this.renderer.context.getShaderInfoLog = function () { return '' };

  var width = this.size().width;
  var height = this.size().height;
  var that = this;
  this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  var controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

  container.appendChild(this.renderer.domElement);

  controls.maxPolarAngle = Math.PI * 0.5;
  controls.minDistance = CONTROL_MIN_DISTANCE;
  controls.maxDistance = CONTROL_MAX_DISTANCE;

  Load(parameters.url, (scene) => {
    that.scene = scene;
    controls.reset();
    that.animate();
    if (parameters.callback) {
      parameters.callback(this);
    }
  });
};

Clip.prototype.animate = function () {
  var size = this.size();
  requestAnimationFrame(this.animate.bind(this));
  this.renderer.setSize(size.width, size.height);
  this.renderer.render(this.scene, this.camera);

  if (Clip.enableStats) {
    this.stats.dom.style.visibility= 'visible'
    this.stats.update();
  } else {
    this.stats.dom.style.visibility= 'hidden'
  }
};

export default Clip
