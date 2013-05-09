(function( $ ){

$.widget( "mobile.ajaxform", $.mobile.widget, {
  
  options: {
    resetform: false 
  },
  
  _create: function() {
    var $target = $(this.element),
        self = this;
    
    $target.ajaxForm({ 
      dataType:  'json', 
      complete: function() {
        if(self.options.resetform) {
          $target.resetForm();
        }
      },
      success: function(responseData) {
        $.globalEval(responseData.callback);
      }
    });
    
    $target.on('cleanup', function() {
      $target.resetForm();
    });
  }
  
});


$( document ).bind( "pagecreate create updatelayout", function( e ) {
  // Initialize plugin
  $("form[data-role='ajaxform']").ajaxform();
});

}( jQuery ));