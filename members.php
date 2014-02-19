<!DOCTYPE html>
<html>
  <?php include "head.php"?>
  <body>
    <div class='wrap'>
    <?php include "header.php"?>
      <div class='container'>
        <div class="whitefill blackglow">
          <center><h2><span class='text-danger'>Deep Treble</span> Members</h2></center>
          <div class='row'>
            <?php
              $member_types = array("Sopranos", "Altos", "Tenors", "Basses");
              foreach ($member_types as $member_type) {
                echo "<center><h3>" . $member_type . "</h3></center>";
                $dir = 'members/' . $member_type . '/';
                if (is_dir($dir)){
                  $dh = php4_scandir($dir);
                  $isLeft = True;
                  foreach ($dh as $file) {
                    if ($file != '.' && $file != '..') {
                      $info = file_get_contents($dir . $file . '/info');
                      echo "<div class='no-margin media col-sm-4 ";
                      if ($isLeft) {
                        echo "col-sm-offset-2'>";
                      } else {
                        echo "'>";
                      }
                      echo "<a class='pull-left' href='#'>
                        <img src='";
                      if (file_exists($dir . $file . '/photo.jpg')) {
                        echo $dir . $file . "/photo.jpg";
                      } else {
                        echo "missing_photo.jpg";
                      }
                      echo "' class='media-object' data-src='holder.js/100x100' alt='100x100' style='width: 100px; height: 100px;' color='black'>
                        </a>
                        <div class='media-body'>
                          <h4 class='media-heading'>" . $file . "</h4>
                          " . $info  . "
                        </div>
                        </div>";
                      if (!$isLeft) {
                        echo "</div><div class='whitespace'></div><div class='row'>";
                      }
                    }
                    $isLeft = !$isLeft;
                  }
                }
                      if (!$isLeft) {
                        echo "</div><div class='whitespace'></div><div class='row'>";
                      }
              }
            ?>
          </div>
          <div class='whitespace'></div>
        </div>
      </div>
      <div id='push'></div>
    </div>
    <?php include "footer.php"?>
    <!-- Javascript -->
    <?php include "ready.php"?>
  </body>
</html>

