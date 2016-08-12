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
    this.touching = false;
    document.addEventListener( 'mousedown',
        this.onDocumentMouseBegin.bind(this), false );

    document.addEventListener( "mousemove",
        this.onDocumentMouseMove.bind(this), false);

    var exitEvents = ["mouseup", "mouseout", "mouseleave"];
    for (var i = 0; i < exitEvents.length; ++i){
        document.addEventListener( exitEvents[i],
            this.onDocumentMouseEnd.bind(this), false);
    }

}

Control.prototype.update = function(){

}

Control.prototype.onDocumentMouseBegin = function(){
    this.touching = true;
}


Control.prototype.onDocumentMouseMove = function(event){
    if (this.touching){
        console.log(event);
        this.camera.position.x += .05;
    }

}

Control.prototype.onDocumentMouseEnd = function(){
    this.touching = false;
}