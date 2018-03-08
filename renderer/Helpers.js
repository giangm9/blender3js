/**
 * To add Helper into a scene
 * */

import * as THREE from './libs/three.js';

export default function AddHelpers(scene){

  addGrid(scene);
  addArrow(scene);

}

function addGrid(scene){
  var plane = new THREE.GridHelper(100, 20);
  scene.add(plane);
}

function addArrow(scene){
  var dirX = new THREE.Vector3( 1, 0, 0 );
  var dirY = new THREE.Vector3( 0, 1, 0 );
  var dirZ = new THREE.Vector3( 0, 0, 1 );

  var origin = new THREE.Vector3( 0, 0, 0 );

  var arrowX = new THREE.ArrowHelper( dirX, origin, 1, 0xff0000);
  var arrowY = new THREE.ArrowHelper( dirY, origin, 1, 0x00ff00);
  var arrowZ = new THREE.ArrowHelper( dirZ, origin, 1, 0x0000ff);

  scene.add( arrowX );
  scene.add( arrowY );
  scene.add( arrowZ );
}



