<?php 
  // echo $_GET['email'];//superglobal
  // echo $_GET['senha'];

  session_start();
  

  $usrAutenticado = false;
  $usuario_id = null;
  $usuario_perfil_id = null;

  $perfis = array(1 => 'Administrativo', 2 => 'Usuário');

  $usuario_app = array(
    array('id' => 1, 'email' => 'admin@admin.com', 'senha' => '123', 'perfil_id' => 1),
    array('id' => 2, 'email' => 'usr@teste.com', 'senha' => 'abc', 'perfil_id' => 2)
  );

  foreach ($usuario_app as $user) {

    $usr = $user['email'];
    $pass = $user['senha'];

    $usrForm = $_POST['email'];
    $passForm = $_POST['senha'];

    if ($usr === $usrForm && $pass === $passForm) {
      $usrAutenticado = true;
      $usuario_id = $user['id'];
      $usuario_perfil_id = $user['perfil_id'];
    }
  }

  if ($usrAutenticado) {
    echo 'Autenticado';
    $_SESSION['autenticado'] = 'SIM';
    $_SESSION['id'] = $usuario_id;
    $_SESSION['perfil_id'] = $usuario_perfil_id;


    header('Location: home.php');
  } else {
    $_SESSION['autenticado'] = 'NAO';
    header('Location: index.php?login=erro');

  }
  
?>