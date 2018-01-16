var WinResize = function (scene) {
    this.scene = scene;

    window.addEventListener( 'resize', this.onWindowResize.bind(this), false );
}

WinResize.prototype.init = function(){
    this.main = this.scene.getMain();
}

WinResize.prototype.onWindowResize = function(){
    var main = this.main;

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    main.camera.aspect = window.innerWidth / window.innerHeight;
    main.camera.updateProjectionMatrix();

    main.renderer.setSize( window.innerWidth, window.innerHeight );
}

