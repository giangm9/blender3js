/**
 * Scene's Helpers
 * Need for development purpose
 * */

import * as THREE from './libs/three.js';

function Helpers( scene ){
  this.scene = scene;
  this.addGrid();
  this.addAxes();
//  this.addWireFrame();
}

Helpers.prototype.addGrid = function(){
  var grid = new THREE.GridHelper(100, 20);
  this.scene.add(grid);
}

Helpers.prototype.addAxes = function(){
  var axis = new THREE.AxesHelper( 20 );
  this.scene.add(axis); 
}

Helpers.prototype.addWireFrame = function(){
  this.scene.children.forEach( function( obj ) {
    if ( obj.isMesh ) {
      var geo = new THREE.EdgesGeometry( obj.geometry ); // or WireframeGeometry
      var mat = new THREE.LineBasicMaterial( { color: 0x22220000, linewidth: 1 } );
      var wireframe = new THREE.LineSegments( geo, mat );
      obj.add( wireframe );
    }
  });
}

export default Helpers
