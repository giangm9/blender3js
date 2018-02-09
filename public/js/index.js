$(
    function(){
      var codeSource = $('#js-source');
      var divSource = $('#source');
      var selectExample = $("#examples-select");
      var iframePreview = $("#preview");

      for (var name in AllExamples){
        var url = AllExamples[name];
        selectExample.append($('<button>', {
          value : url,
          text: name
        }));
      }

      selectExample.change(() => {
        selectExample.css("disabled", "disabled");
        iframePreview.attr('src',this.value);

        $.get(this.value, function( data ) {
          console.log('get');
          codeSource.text(data);
          sh_highlightDocument();
          selectExample.removeAttr('disabled');
        });
      });
    }
);
