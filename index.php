<!DOCTYPE html>
<html>

  <!-- Include head material, like CSS and Javascript. -->
  <?php include 'head.php'?>
  <body>

    <!-- Wrap the contents of the page so that if the page is shorter than the height of the browser, it will let the footer stick to the bottom. -->
    <div class='wrap'>

      <!-- Include the header of the website, which is shared throughout. -->
      <?php include 'header.php'?>

      <!-- The glow and white fill of the content of the page -->
      <div class='container'>
        <div class="whitefill blackglow">

          <!-- The image slider, takes files from server and serves them up in order -->
          <div id="myCarousel" class="carousel slide">
            <?php
              $folder = 'sliderImages/';
              if (is_dir($folder)){
                $images = php4_scandir($folder);
                $size = count($images);
                //Create Indicators.
                echo "<ol class='carousel-indicators'>";
                $i = 0;
                foreach ($images as $imageFolder) {
                  if ($imageFolder != '.' && $imageFolder != '..') {
                    echo "<li data-target='#myCarousel' data-slide-to='" . $i . "' class='";
                    if ($i === 0) {
                      echo "active";
                    }
                    echo "'></li>";
                    $i++;
                  }
                }
                echo "</ol>";

                //Create contents.
                echo "<div class='carousel-inner'>";
                $i = 0;
                foreach ($images as $imageFolder) {
                  if ($imageFolder != '.' && $imageFolder != '..') {
                    $image = "sliderImages/" . $imageFolder . '/image';
                    $imageLink = "sliderImages/" . $imageFolder . '/link';
                    echo "<div class='item";
                    if ($i === 0) {
                      echo " active";
                    }
                    echo "'>
                      <center>";
                    if (is_file($imageLink)) {
                      echo "<a href='";
                      readfile($imageLink);
                      echo "'>";
                    }
                    echo "<img style='border:0;' class='banner' src='";
                    echo $image;
                    echo "' alt=''></center></div>";
                    if (is_file($imageLink)) {
                      echo "</a>";
                    }
                    $i++;
                  }
                }
                echo "</div>";
              }
            ?>
            <!-- Controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>

          <div class='row'>

            <!-- Twitter bar -->
            <div class='col-sm-4'><br>
              <a class="twitter-timeline" href="https://twitter.com/DeepTreble" data-widget-id="400697437305569281" data-tweet-limit="3">Tweets by @DeepTreble</a>
              <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
            </div>

            <!-- Main content -->
            <div class='col-sm-8'>
              <center><h2><span class='text-danger'>Deep Treble</span> Homepage</h2></center>
              <h4>Sixteen years ago, a few good men and women embarked upon a journey that would change their lives (and hundreds of others) forever. That's right, it's the 16th anniversary of Deep Treble, Rutgers University's first contemporary A Cappella group! Winners of multiple ICCA Awards over the years, Deep Treble is ecstatic to be able to continue to entertain audiences worldwide with their variety of song selection and invigorating choreography. If you want to contact Deep Treble in regards to a performance, please do so at <a href='mailto:rudeeptreble@gmail.com'>rudeeptreble@gmail.com</a>! We love performing, and if we're available, we'd love to sing for you, too!</h4>
              <h4>In this website, you can explore the current members and alumni profiles as well as view some of the most up to date information about us. Enjoy!</h4>
            <h3>Updates</h3>
            <h4>Our concert is on May 2nd in Voorhees Hall room 105! Doors open at 7:30pm and the concert begins at 8pm. Buy tickets at the door $3 for students and $5 for general admission! Please <a href='contact.php'>contact us</a> with any questions.</h4>
            </div>
          </div>
        </div>
      </div>
      <div id='push'></div>
    </div>
    <?php include "footer.php"?>
    <!-- Javascript -->
    <?php include "ready.php"?>
  </body>
</html>

