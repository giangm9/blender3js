$(
    function(){
      var codeSource = $('#js-source');
      var divSource = $('#source');
      codeSource.text('source');
      $.get( "examples/5cubes.html", function( data ) {
        codeSource.text(data);
        sh_highlightDocument();
      });
    }
);
