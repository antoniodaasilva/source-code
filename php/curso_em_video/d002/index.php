<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="../styles.css">
</head>

<body>
  <main>
    <h1>Trabalhando com números aleatórios</h1>
    <?php
      $min = 0;
      $max = 100;
      $num = mt_rand($min, $max);
       echo "<p>Gerando número aleatório entre $min e $max... <br>O número gerado foi <br><strong>$num</strong>";
    ?>
    <button onclick="javascript:document.location.reload
    ()">&#x1f504; Gerar outro</button>
  </main>
</body>

</html>