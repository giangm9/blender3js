var AutoRotate = function (scene){
    this.owner = scene;
}


AutoRotate.prototype.init = function(){
    this.camera = this.owner.getMain().camera;
}

AutoRotate.prototype.update = function(){

    this.camera.position.x += .1;
    console.log(this.camera.position);
}

