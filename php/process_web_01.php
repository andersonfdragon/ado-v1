<?php

$errorMSG = "";

// FIRST_NAME
if (empty($_POST["first_name_web_01"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $first_name_web_01 = $_POST["first_name_web_01"];

}

// TELEFONO
if (empty($_POST["telephone_web_01"])) {
    $errorMSG .= utf8_decode("Complete este campo");
} else {
    $telephone_web_01 = $_POST["telephone_web_01"];
}


//CONTACTOS Y ASUNTO
//$Contacts = array('manager@alianzadigital.online');
$Contacts = array('diego-granada@msn.com');
$Subject = "NUEVO-LEAD-ALIANZADIGITAL.ONLINE-WEB";


// CUERPO DE TEXTO MENSAJE
$Body = "";

$Body .= utf8_decode("Nombre completo: ");
$Body .= utf8_decode($first_name_web_01);
$Body .= "\n";

$Body .= utf8_decode("Número de Celular: ");
$Body .= utf8_decode($telephone_web_01);
$Body .= "\n";

// send email
foreach ($Contacts as $Contact){
    $to =  $Contact;
    $success = mail($to, $Subject, $Body, "From:"."alianzadigital.online");
}

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}
else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    }
    else {
        echo $errorMSG;
    }
}

?>
