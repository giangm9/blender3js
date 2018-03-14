import Clip from './Clip.js';
import GLTFClip from './GLTFClip.js';

function render(url, container, callback){
  new Clip(url, container, callback);
}

function GLTFRender(url, container, callback) {
  new GLTFClip ( url, container, callback );
}

global.HMI3DRenderer = {
  render: render,
  gltfRender : GLTFRender
}
