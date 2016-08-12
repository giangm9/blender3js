/// <reference path="animation.js" />
/// <reference path="character.js" />


var Scene = function(){
    this.seeds = [LoadMain, Control];

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

/**
 * @param {string} name
 */
Scene.prototype.getModuleByName = function(name){
    for (var i = 0; i < this.modules.length; ++i){
        if (this.modules[i].name == name){
            return this.modules[i];
        }
    }
}

Scene.prototype.getMain = function(){
    return this.getModuleByName("main");
}

Scene.prototype.render = function(){
    requestAnimationFrame(this.render.bind(this));
    for (var i = 0; i < this.modules.length; ++i){
        if (this.modules[i].update != undefined){
            this.modules[i].update();
        }

    }
}

var scene = new Scene();