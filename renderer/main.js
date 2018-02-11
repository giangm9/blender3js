import Clip from './Clip.js';

function render(url, container, callback){
  new Clip().render(url, container, callback);
}

function stats(enable){
  if (enable == undefined){
    return Clip.enableStats;
  }

  Clip.enableStats = enable;
}


global.HMI3DRenderer = {
  render: render,
  stats : stats
}
