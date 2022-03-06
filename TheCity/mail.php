<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$type = $_POST['type'];
$formcontent=" From: $name \n Email: $email \n Phone: $phone \n Message: $type ";
$recipient = "info@mastergroupeg.com";
$subject = "MG Campaign";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='thankyou.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>
