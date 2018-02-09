$(
    function(){
      var codeSource = $('#js-source');
      var divSource = $('#source');
      codeSource.text('source');
      $.get( "public/examples/5cubes.html", function( data ) {
        codeSource.text(data);
        sh_highlightDocument();
      });
    }
);
