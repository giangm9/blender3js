/// <reference path="three/three.js" />
/// <reference path="loadmain.js" />

/**
 * support drag to change the camera
 */

var Control = function(owner){
    this.name = "control"
    this.owner = owner;
    this.phi = 0;
    this.theta = 0;
    this.radius = 10;
    control = this;
}

Control.prototype.movementX = function(value){
    this.phi += value;
}

Control.prototype.movementY = function(value){
    this.theta += value;
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
    this.updateCamera();
}

Control.prototype.onDocumentMouseBegin = function(){
    this.touching = true;
}


Control.prototype.onDocumentMouseMove = function(event){
    if (this.touching){
        var speed = .01;
        this.theta += event.movementX * speed;
        this.phi += event.movementY * speed;
    }

}

Control.prototype.onDocumentMouseEnd = function(){
    this.touching = false;
}


Control.prototype.updateCamera = function(){
    var px = 0;
    var py = 0;
    var pz = 0;

    this.camera.position.x
        = px + this.radius * Math.cos(this.phi) * Math.sin(this.theta);
    this.camera.position.y
        = py + this.radius * Math.sin(this.phi) * Math.sin(this.theta);
    this.camera.position.z
        = pz + this.radius * Math.cos(this.theta);


}