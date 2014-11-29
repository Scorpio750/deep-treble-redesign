<?php
  if ($_POST["password"] == "200percentyeah!") {
    file_put_contents('data/homepage.html', $_POST["data"]);
    echo "Accepted Changes.";
  } else {
    echo "Incorrect Password!";
  }
?>
