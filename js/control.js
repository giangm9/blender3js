/// <reference path="three/three.js" />
/// <reference path="loadmain.js" />

/**
 * support drag to change the camera
 */

var Control = function(owner){
    this.owner = owner;

}

Control.prototype.init = function(){
    this.main = this.owner.getMain();
    this.camera = this.main.camera;
    document.addEventListener( 'mousemove',
        this.onDocumentMouseMove, false );
}

Control.prototype.update = function(){

}

Control.prototype.onDocumentMouseMove = function(){

}