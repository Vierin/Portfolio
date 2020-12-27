<?php 
    $fName = 'Имя: '.$_POST['name'].' <br />';
    $fMail =  'Почта: '.$_POST['email'].' <br />';
    $fMessage =  'Сообщение: '.$_POST['text'].' <br />';
    $AllInOne =  $fName.$fMail.$fMessage;
    $to = 'ivanvierin@gmail.com'; 
    $headers="From: Vierin.pl \nReply-to:ivanvierin@gmail.com\nContent-Type: text/html; charset=\"utf-8\"\n"; 
    // функция, которая отправляет наше письмо
    mail($to, 'Сообщение с сайта Vierin.pl', $AllInOne, $headers); 

?>
