import * as THREE from './libs/three.js';

export default function load(path, callback) {
  var loader = new THREE.ObjectLoader();
  var res = null;

  loader.load(
    path,
    function (obj) {
      callback(obj)
    },
    function (xhr) {
      //console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
      console.error('An error happened');
      console.log(error);
    }
  );
}

