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
    $nome = 'Antonio';
    $sobrenome = 'Brito';
    $texto = "Texto aqui";
    const ESTADO = "PR";


    echo "Meu nome é $nome $sobrenome <br/><br/> \n";
    echo "<br/>Meu nome é $nome $sobrenome <br/> \n";
    echo "<br/>Moro no estado " . ESTADO;
    echo "<br/><br/>sequencia \"de\" escape <br/>\n";
    echo "<br/>$nome \t\t \"tabulação\" \t$sobrenome";


    echo <<< TEXTOQUALQUER
    <br/>
    <br/>
    <br/>
          Declaração de strings
            Heredoc
            Tal qual
            exbir codigo fonte no navegador

    TEXTOQUALQUER;
  ?>
  

  <p>Mostrando variavel no HTML: <?= texto?></p>
  <p>
    Para constantes e resultados de funções não há interpretação
  </p>

</body>
</html>
