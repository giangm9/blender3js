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
  var dir = new THREE.Vector3( 1, 2, 0 );

  //normalize the direction vector (convert to vector of length 1)
  dir.normalize();

  var origin = new THREE.Vector3( 0, 0, 0 );
  var length = 1;
  var hex = 0xffff00;

  var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
  scene.add( arrowHelper );
}


