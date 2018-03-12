/**
 * Scene's Helpers
 * Need for development purpose
 * */

import * as THREE from './libs/three.js';

function Helpers( scene ){
  this.scene = scene;
  this.addGrid();
  this.addAxes();
}

Helpers.prototype.addGrid = function(){
  var grid = new THREE.GridHelper(100, 20);
  this.scene.add(grid);
}

Helpers.prototype.addAxes = function(){
  var axis = new THREE.AxesHelper( 20 );
  this.scene.add(axis); 
}

export default Helpers
