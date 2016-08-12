/// <reference path="three/three.js" />
/// <reference path="loadmain.js" />
/// <reference path="pupScene.js" />

/**
 * support drag to change the camera
 */

var Control = function(owner){
    this.owner = owner;

}

Control.prototype.init = function(){
    this.main = this.owner.getMain();
}

Control.prototype.update = function(){

}