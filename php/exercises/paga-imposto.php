<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pagar impostos</title>
</head>
<body>
  
  <?php 
    function aliquota($salario) {

      $isento = 1903.98;
      $sete_meio_min = 1903.99;
      $sete_meio_max = 2826.65;
      $quinze_min = 2826.66;
      $quinze_max = 3751.05;
      $vinte_dois_min = 3751.06;
      $vinte_dois_max = 4664.68;


      if ($salario >= $vinte_dois_max) {
        echo "<p>Você deve pagar 27,5 % de imposto</p>";
      }

    }

    aliquota(5000.00);
  
  ?>


</body>
</html>