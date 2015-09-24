<?php
//This is a modified free PHP script provided by html-form-guide.com.-->
$errors = '';
#####
#this should email acm@pugetsound.edu!
####
$myemail = 'tvaz@pugetsound.edu'; // This email will be contacted.

if(empty($_POST['name'])  ||
   empty($_POST['email']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name'];
$email_address = $_POST['email'];

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))

{

$to = $myemail;

$email_subject = "$name wants to be added to mailing list.";

$email_body = "You have received an interest message from the ACM website.".

"\n Name: $name \n ".

"Email: $email_address\n";

$headers = "From: $myemail\n";

$headers .= "Reply-To: $email_address";

mail($to,$email_subject,$email_body,$headers);

//redirect to the 'thank you' page

header('Location: index.html');

}
?>
