<!DOCTYPE html>
<html lang="pr-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>cadastro</title>
  <link rel="stylesheet" href="styles.css">

</head>
<body>
  <header>
    <h1>Bem vindo</h1>
  </header>
  <main>
    <?php 
      $name = $_GET["nome"] ?? "sem nome";
      $lastName = $_GET["sobrenome"] ?? "desconhecido";
      echo "<p>Prazer $name $lastName</p>";
    ?>
    <p>
      <a href="javascript:history.go(-1)">Voltar</a>
    </p>
  </main>
</body>
</html>