<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$data = $_POST;
echo $data['username'];
// echo $data['userphone'];
// echo json_encode($data, JSON_UNESCAPED_UNICODE);
// $name = $data['username'];
// $phone = $data['userphone'];
// // $email = $_POST['user_email'];

// //$mail->SMTPDebug = 3;                               // Enable verbose debug output

// $mail->isSMTP();                                      // Set mailer to use SMTP
// $mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
// $mail->SMTPAuth = true;                               // Enable SMTP authentication
// $mail->Username = 'mailsfromweb@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
// $mail->Password = 'ztpifburg12'; // Ваш пароль от почты с которой будут отправляться письма
// $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
// $mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

// $mail->setFrom('mailsfromweb@mail.ru'); // от кого будет уходить письмо?
// $mail->addAddress('html-tida@mail.ru');     // Кому будет уходить письмо 
// //$mail->addAddress('ellen@example.com');               // Name is optional
// //$mail->addReplyTo('info@example.com', 'Information');
// //$mail->addCC('cc@example.com');
// //$mail->addBCC('bcc@example.com');
// //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
// $mail->isHTML(true);                                  // Set email format to HTML

// $mail->Subject = 'Заявка с тестового сайта';
// $mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ';
// $mail->AltBody = '';

// if(!$mail->send()) {
//     echo 'Error';
// } else {
//     echo $data['username'];
// }
?>