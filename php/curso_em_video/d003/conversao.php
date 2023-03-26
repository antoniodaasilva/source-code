<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <main>
    <?php
      $cotacao = 5.17;
      $real = 1000;
      $dolar = $real / $cotacao;
      
      $padrao = numfmt_create("pt-BR", NumberFormatter::CURRENCY);
      echo "<p>";
        echo "Seus " . numfmt_format_currency($padrao, $real, "Brl") . "equivalem" . numfmt_format_currency($padrao, $dolar, "USD") ;
      echo "</p>";
    ?>
  </main>

</body>

</html>