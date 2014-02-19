<!DOCTYPE html>
<html>
  <?php include 'head.php'?>
  <body>
    <div class='wrap'>
    <?php include 'header.php'?>
      <div class='container'>
        <div class="whitefill blackglow">
          <center><h2><span class='text-danger'>Deep Treble</span> Homepage Settings</h2></center>
          <h3>Add an image to the carousel</h3>
          <form enctype="multipart/form-data" action="upload_carousel.php" method="POST">
            <!-- MAX_FILE_SIZE must precede the file input field -->
            <input type="hidden" name="MAX_FILE_SIZE" value="10000000" />
            <!-- Name of input element determines name in $_FILES array -->
            Send this file: <input name="userfile" type="file" />
            Name: <input name='name' type='text'/>
            Password: <input name='password' type='password'/>
            <input type="submit" value="Send File" />
          </form>
          <h3>Remove an image from the carousel</h3>
          <form action="delete_carousel.php" method="post">
          <?php
            $cur = 'sliderImages/';
            if (is_dir($cur)){
              $images = php4_scandir($cur);
              $size = count($images);
              $i = 0;
              foreach ($images as $image) {
                if ($image != '.' && $image != '..') {
                  echo "<input type='checkbox' name='imagesToDel[]' value='" . $i . "' />" . $image . "<br>";
                  $i++;
                }
              }
            }
          ?>
          <input type="submit" name="formSubmit" value="Submit" />
          </form>

          <h3>Add an event</h3>
          <form action="event_add.php" method="post">
            Event name: <input type="text" name="event_name"><br>
            Info: <input type="text" name="event_info"><br>
            <input type="submit">
          </form>

          <h3>Remove an event</h3>
          <form action="event_remove.php" method="post">
          <?php
            $cur = 'events/';
            if (is_dir($cur)){
              $events = php4_scandir($cur);
              $size = count($events);
              $i = 0;
              foreach ($events as $event) {
                if ($event != '.' && $event != '..') {
                  echo "<input type='checkbox' name='imagesToDel[]' value='" . $i . "' />" . $event . "<br>";
                  $i++;
                }
              }
            }
          ?>
          <input type="submit" name="formSubmit" value="Submit" />
          </form>

          <h3>Edit homepage text</h3>
          <form action="edit_home_text.php" method="post">
            <textarea name="new_text"></textarea><br>
            <input type="submit">
          </form>
        </div>
      </div>
      <div id='push'></div>
    </div>
    <?php include "footer.php"?>
    <!-- Javascript -->
    <?php include "ready.php"?>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
  </body>
</html>

