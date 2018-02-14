import Clip from './Clip.js';

function render(url, container, callback){
  new Clip(url, container, callback);
}


global.HMI3DRenderer = {
  render: render,
}
