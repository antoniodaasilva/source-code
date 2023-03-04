<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <?php 
    $texto = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum enim, maxime vel quod esse ex ullam blanditiis, possimus et cum totam magnam debitis dignissimos adipisci nostrum placeat odit nulla deserunt!";
    
    echo substr($texto, 0, 57) . '... ';
    echo '<br />';
    echo '<hr />';

    echo str_repeat("a", 10);



  ?>
</body>
</html>