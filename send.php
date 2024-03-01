<?php

$login = $_POST['login'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$text = $_POST['text'];

////////////////////////////

$login = htmlspecialchars($login);
$email = htmlspecialchars($email);
$tel = htmlspecialchars($tel);
$text = htmlspecialchars($text);

$login = urldecode($login);
$email = urldecode($email);
$tel = urldecode($tel);
$text = urldecode($text);

$login = trim($login);
$email = trim($email);
$tel = trim($tel);
$text = trim($text);


////////////////////////////

if (mail("bex.ziyo@mail.ru",
"Новое письмо с сайта",
"Логин:" .$login."\n".
"Email:" .$email."\n".
"Телефон:" .$tel,
"Сообщение:" .$text,
"From: no-replay@it-proger.uz\r\n")
) {
    echo('Письмо успешно отправлено!');

}

else{
    echo('Есть ошибки! Проверьте данные...');
}




?>