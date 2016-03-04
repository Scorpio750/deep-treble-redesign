var prepareBG = function() {        
  var fill = document.getElementById('fill');
  var windowOffset = $(window).scrollTop();
  var opac = Math.min(windowOffset/500, 1);
  $('#fill').css({opacity: opac});
}
$(document).scroll(prepareBG);

$(document).onload(function() {
        'use strict';

        // Render our headers and footers.
        $.get('header.html', function(data) {
          $('header').html(data);
        });
        $.get('footer.html', function(data) {
          $('footer').html(data);
        });
});