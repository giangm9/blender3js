$(
  function(){
    var codeSource = $('#js-source');
    var divSource = $('#source');
    var selectExample = $("#select");
    var iframePreview = $("#if-preview");

    for (var name in AllExamples){
      var url = AllExamples[name];
      selectExample.append([
        $('<input>', {
          type: 'radio',
          value : url,
          name : 'example',
          id: "se-" + name
        }),

        $('<label>', {
          for: "se-" + name,
          text: name,
          name: name
        })
      ]
      );

    }
    var first = selectExample.children(":first");
    first.attr("checked", true);
    updateExample(first.val());

    $('input[type="radio"]').change(function(){
      if ($(this).is(':checked')){
        var url = $(this).val();
        selectExample.attr("disabled", "disabled");
        updateExample(
          url,
          function(){ 
            selectExample.removeAttr("disabled");
          }
        );
      }
    });

    function updateExample(url, done){
      $.get(url, function( data ) {
        iframePreview.attr("src", url);
        codeSource.text(data);
        sh_highlightDocument();
        selectExample.removeAttr('disabled');
        if (done){
          done();
        }
      });
    }
  }
);


