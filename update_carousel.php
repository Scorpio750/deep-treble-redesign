<?php
  if ($_POST["password"] == "200percentyeah!") {
    file_put_contents('data/carousel.json', $_POST["data"]);
    foreach ($_FILES as $key => $value) {
      $upload_path = "images/slider/" . $key;
      if (move_uploaded_file($_FILES[$key]["tmp_name"], $upload_path)) {
        // Cool!
      } else {
        echo "Failed to upload a file!";
      }
    }
    echo "Accepted Changes.";
  } else {
    echo "Incorrect Password!";
  }
?>
