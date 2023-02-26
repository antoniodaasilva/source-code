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
  //configura timezone
    date_default_timezone_set("America/Sao_Paulo");
    echo "Hoje é dia " . date("D/M/Y") . "<br />";
    echo "dia numerio" . date("d");
    //mostra hora do servidor
    echo "Hora " . date("G:i:s T");
  ?>
</body>
</html> 