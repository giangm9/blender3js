$(() => {
  HMI3DRenderer.render(
    "https://raw.githubusercontent.com/giangm9/blender3js/master/exporter/output/quartz.json",
    document.getElementById("container"),
    function(clip){
//      console.log(clip.camera);
    }
  );

})
