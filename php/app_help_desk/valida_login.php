<?php 
  // echo $_GET['email'];//superglobal
  // echo $_GET['senha'];

  session_start();
  

  $usrAutenticado = false;

  $usuario_app = array(
    array('email' => 'admin@admin.com', 'senha' => '123'),
    array('email' => 'usr@teste.com', 'senha' => 'abc')
  );

  foreach ($usuario_app as $user) {

    $usr = $user['email'];
    $pass = $user['senha'];

    $usrForm = $_POST['email'];
    $passForm = $_POST['senha'];

    if ($usr === $usrForm && $pass === $passForm) {
      $usrAutenticado = true;
    }
  }

  if ($usrAutenticado) {
    echo 'Autenticado';
    $_SESSION['autenticado'] = 'SIM';
    header('Location: home.php');
  } else {
    $_SESSION['autenticado'] = 'NAO';
    header('Location: index.php?login=erro');

  }
  
?>