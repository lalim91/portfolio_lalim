<?php
require_once('email_config.php');
require('PHPMailer/PHPMailerAutoload.php');

$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_REGEXP, ['options'=>['regexp'=>'[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$']]);
if ($email === null || $email === false){
    http_response_code(404);
    exit();
}

$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
if (empty($name)){
    http_response_code(404);
    exit();
}

$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
if (empty($message)){
    http_response_code(404);
    exit();
}


$mail = new PHPMailer;
$mail->SMTPDebug = 0;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication


$mail->Username = EMAIL_USER;                 // SMTP username
$mail->Password = EMAIL_PASS;                 // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to
$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mail->smtpConnect($options);
$mail->From = $_POST['email'];
$mail->FromName = $name;
$mail->addAddress('leslieannlim@gmail.com', 'Leslie Lim');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo($_POST['email'], $name);
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'message from '.$_SERVER['REMOTE_ADDR'];
$mail->Body    = $message;
$mail->AltBody = htmlentities($message);

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    //header('location: ../index.html');
    echo 'Message has been sent';
}
?>
