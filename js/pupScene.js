/// <reference path="animation.js" />
/// <reference path="character.js" />

/**
 * Tải scene ở đây,
 */


var PupScene = function(){
    this.seeds = [LoadMain];

    this.modules = [];
    for (var i = 0; i < this.seeds.length; ++i){
        this.modules.push(new this.seeds[i](this));
    }
    for (var i = 0; i < this.modules.length; ++i){
        if (this.modules[i].init != undefined){
            this.modules[i].init();
        }
    }

    this.render();
}

PupScene.prototype.render = function(){
    requestAnimationFrame(this.render.bind(this));
    for (var i = 0; i < this.modules.length; ++i){
        this.modules[i].update();
    }
}

var scene = new PupScene();