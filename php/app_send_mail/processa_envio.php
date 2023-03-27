<?php 
  //print_r($_POST);
  require "./libs/PHPMailer/Exception.php";
  require "./libs/PHPMailer/OAuth.php";
  require "./libs/PHPMailer/PHPMailer.php";
  require "./libs/PHPMailer/POP3.php";
  require "./libs/PHPMailer/SMTP.php";

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  use PHPMailer\PHPMailer\SMTP;


  
  class Mensagem {
    private $para = null;
    private $assunto = null;
    private $mensagem = null;

    public function __get($atributo) {
      return $this->$atributo;
    }

    public function __set($atributo, $valor) {
      $this->$atributo = $valor;
    }

    public function mensagemValida() {
      if (empty($this->para) || empty($this->assunto) || empty($this->mensagem)) {
        return false;
      }

      return true;
    }
  }

  $mensagem = new Mensagem();

  $mensagem->__set('para', $_POST['para']);
  $mensagem->__set('assunto', $_POST['assunto']);
  $mensagem->__set('mensagem', $_POST['mensagem']);

  
  if (!$mensagem->mensagemValida()) {
    echo 'Mensagem não é válida';
    die();
  } 

  $mail = new PHPMailer(true);

  try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'antonio11brito@gmail.com';
    $mail->Password   = 'sairuspuckerdovahkiin';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    //Recipients
    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress('joe@example.net', 'Joe User');
    $mail->addAddress('ellen@example.com');
    $mail->addReplyTo('info@example.com', 'Information');
    $mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');

    //Attachments
    $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
  } catch (Exception $e) {
    echo "Não foi possível enviar esta mensagem, tente novamente mais tarde";
    echo "Detalhes do erro {$mail->ErrorInfo}";
  }

?>