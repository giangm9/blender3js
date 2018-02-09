import Clip from './Clip.js';

function render(url, container, callback){
  new Clip().render(url, container, callback);
}

global.HMI3DRenderer = {
  render: render
}
