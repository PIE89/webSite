<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Автоподключение модулей
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {

	// Настройки PHP mailer
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	// Настройки SMTP для Google
	// $mail->isSMTP();
	// $mail->Host = 'smtp.gmail.com';
	// $mail->SMTPAuth = true;
	// $mail->Username = 'ivanpopov141993@gmail.com'; // Ваш адрес электронной почты Gmail
	// $mail->Password = 'ajoj khho ovwc pmcv'; // Пароль приложения
	// $mail->SMTPSecure = 'tls';
	// $mail->Port = 587;

	// Настройки SMTP для Yandex
	$mail->isSMTP();
	$mail->Host = 'smtp.yandex.ru';
	$mail->SMTPAuth = true;
	$mail->Username = 'spyder34@yandex.ru'; // Ваш адрес электронной почты Yandex
	$mail->Password = 'hmcbiqeoxtvzyshx'; // Пароль приложения
	$mail->SMTPSecure = 'tls';
	$mail->Port = 587;

	// Настройки письма
	$mail->setFrom('spyder34@yandex.ru', 'Заявка сайта'); // От кого
	$mail->addAddress('spyder34@yandex.ru'); // Кому
	$mail->Subject = 'Сообщение с сайта'; // Тема письма

	// Формируем тело письма
	$message .= "<b>Email:</b>  {$_POST['email']} <br><br>";
	$message .= "<b>Текст сообщения:</b> <br> {$_POST['message']}";

	// Тело письма
	$mail->Body = $message;

	// Отправка письма
	$mail->send();

	// В случае успеха, выводим 'SUCCESS'
	echo 'SUCCESS';
} catch (Exception $e) {
	// В случае ошибки выводим сообщение об ошибке и содержимое ошибки
	echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
