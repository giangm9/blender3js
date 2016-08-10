/// <reference path="animation.js" />
/// <reference path="character.js" />

/**
 * Tải scene ở đây,
 */
var PupScene = function(){
    var self = this;

    this.render = function(){
        requestAnimationFrame(this.render.bind(self));
    }



    this.render();
}

var scene = new PupScene();