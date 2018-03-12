import * as THREE from './libs/three.js';

export default function Animations( scene ) {
  this.animations = [];
  this.mixers = [];
  scene.children.forEach(function( obj ){
    if (obj.geometry && obj.geometry.animations && obj.geometry.animations.length > 0){
      var geom = obj.geometry;
      var anim = obj.geometry.animations[0];
      var mixer = null;

      this.animations.push( anim );
      mixer = new THREE.AnimationMixer( obj );
      mixer.clipAction( anim ).play();
      this.mixers.push(mixer);

      var helper = new THREE.SkeletonHelper( obj );
      helper.material.linewidth = 3;
      scene.add( helper );
    }
  }.bind(this));
}

Animations.prototype.update = function(dt){
  this.mixers.forEach(function(mixer){
    mixer.update(dt * 0.1);
  });
}
