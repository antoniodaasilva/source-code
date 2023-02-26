<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <?PHP 
    $str = "String";
    $num = 12;
    $bool = true;
    $real = 12.3;

    var_dump($str);

    echo "Tipo string: $str, int ou integer: $num, boolean: $bool"
  ?>

  <h1>Tipos Primitivos</h1>

  <p>String: <?=$str?></p>
  <p>int ou integer: <?=$num?></p>
  <p>Boolean: <?=$bool?></p>
  <p>Float: <?=$real?></p>


</body>
</html>