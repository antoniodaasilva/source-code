<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Desafio 1</title>
  <link rel="stylesheet" href="../styles.css">

</head>
<body>
  <main>
    <h1>Resultado final</h1>
    <p>
      <?php 
        $num = $_REQUEST["num"] ?? 0;
        $a = $num - 1;
        $s = $num + 1;
        echo "O numero escolhido foi $num";
        echo "<br /> O seu antecessor é $a";
        echo "<br /> O seu sucessor é $s";

      ?>
    </p>
    <button onclick="javascript:history.go(-1)">&#x2b05; Voltar</button>
  </main>
</body>
</html>