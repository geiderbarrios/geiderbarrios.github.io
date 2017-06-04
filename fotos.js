<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge"> <!-- For intranet testing only, remove in production. -->
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
  <title>Slide Show</title>
  <style>
    #slideShowImages { /* The following CSS rules are optional. */
      border: 1px gray solid;
      background-color: lightgray;
    }   
  
    #slideShowImages img { /* The following CSS rules are optional. */
      border: 0.8em black solid;
      padding: 3px;
    }   
  </style>
</head>

<body>
  <div id="slideShowImages">
    <img src="logo.jpg" alt="Slide 1" />
       <img src="turbo.jpg" alt="Slide 3" />    
    <img src="geider.jpg" alt="Slide 4" />
  </div>  
  <button id="slideShowButton"></button> <!-- Optional button element. -->
  <script src="slideShow.js"></script>
</body>

</html>
