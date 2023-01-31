<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>If e Else</title>
</head>
<body>
  <?php 
    echo '<h1>if/else estrutura condicional</h1>';

    if (true && true) {
      echo 'Verdadeiro';
      echo '<br />';
    } else {
      echo 'Falso';
      echo '<br />';
    }

    if (6 <> 6) {
      echo '<br />';
      echo 'diferente';
    } else {
      echo '<br />';
      echo 'iguais';
    }
  ?>
</body>
</html>