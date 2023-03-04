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
    $num = 9.99;
    $num2 = 8.99;


    echo floor($num);
    echo '<br/>';
    echo '<br/>';


    echo ceil($num);
    echo '<br/>';

    echo round($num) . ' ' . 'arredonda';
    echo '<br/>';

    echo rand();
    echo rand(5, 25);
    
    
    echo '<br/>' . getrandmax();
    
    echo '<br/> raiz '  . sqrt(15);



  ?>
</body>
</html>