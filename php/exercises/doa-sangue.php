<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pode doar sangue</title>
</head>
<body>

  <?php 
    $peso = 149;
    $idade = 69;

    if ($idade >= 16 && $idade <= 69 &&$peso >= 50 && $peso <= 100 ) {
      echo "Sua idade é $idade e peso $peso kg. Pode doar sangue";
    } else {
      echo "Sua idade é $idade e peso $peso, não pode doar sangue";

    }
  ?>
  
</body>
</html>