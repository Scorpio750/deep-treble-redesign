<script>
  var prepareBG = function() {        
    var fill = document.getElementById('fill');
    var windowOffset = $(window).scrollTop();
    var opac = Math.min(windowOffset/500, 1);
    $('#fill').css({opacity: opac});
  }
  $(document).scroll(prepareBG);
</script>
