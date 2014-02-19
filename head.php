<head>
  <title>Deep Treble, Rutgers Coed A Capella Group</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
  <script src="//code.jquery.com/jquery.js"></script>
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
  <style>
  html
  {
    height:100%;
  }
  body
  {
    height: 100%;
    background: url('bg.jpg') no-repeat center center fixed;
    background-size: cover;
  }
  .wrap 
  {
    min-height: 100%;
    height: auto !important;
    height: 100%;
    margin: 0 auto -50px;
  }
  #push,
  #footer
  {
    height: 50px;
  }
  #footer
  {
    background-color: #101010;
  }
  .whitefill
  {
    padding: 10px;
    background-color: white;
  } 
  .whitespace
  {
    width: 100%;
    height:10px;
  }
  .undermargin
  {
    width:100%;
    margin-bottom: 20px;
  }
  .blackglow
  {
    -moz-box-shadow: 0 0 10px 10px rgba(0,0,0,.7);
    -webkit-box-shadow: 0 0 10px 10px rgba(0,0,0,.7);
    box-shadow: 0 0 10px 10px rgba(0,0,0,.7);
  }
  .topfive
  {
    max-width: 100%;
    height:auto;
  }
  .bottombar
  {   
    padding: 20px;
    height: 60px;
    background-color: #101010;
  }

  .bgblack
  {
    z-index: -10;
    position: absolute;
    height: 128%;
    width: 100%;
  }
  .backgroundfade
  {
    z-index: -10;
    position: fixed;
    background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 52%, rgba(0,0,0,1) 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(52%,rgba(0,0,0,0.8)), color-stop(100%,rgba(0,0,0,1))); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 52%,rgba(0,0,0,1) 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 52%,rgba(0,0,0,1) 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 52%,rgba(0,0,0,1) 100%); /* IE10+ */
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 52%,rgba(0,0,0,1) 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
    height: 100%;
    width: 100%;
    
  }
  .backgroundfill
  {
    z-index: -10;
    position: fixed;
    background-color: black;
    opacity: 0;
    width: 100%;
    height:100%;
  }
  .banner
  {
    width: 100%;
  }
  .hero-unit {
    padding: 30px;
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: 200;
    line-height: 30px;
    background-color: #eeeeee;
    border:1px solid #cacaca;
    -webkit-border-radius: 10px;
           -moz-border-radius: 10px;
            border-radius: 10px;
   }
  .no-margin
  {
    margin-top: 0px !important;
  }
  iframe[id^='twitter-widget-']{
    width:100%;
  }
  </style>
  <?php
  function php4_scandir($dir, $sort = 0)
  {
    if (PHP_VERSION >= '5') return scandir($dir, $sort);
    $dirmap = array();
    if(!is_dir($dir)) {
      trigger_error("lib::scandir($dir): failed to open dir: Invalid argument", E_USER_WARNING);
      return false;
    }
    $dir = opendir($dir);
    while (false !== ($file = readdir($dir)))
      $dirmap[] = $file;
    closedir($dir);
    ($sort == 1) ? rsort($dirmap) : sort($dirmap);
    return $dirmap;
  }
  ?> 
</head>
