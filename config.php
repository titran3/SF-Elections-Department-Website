<?php
    extract($_REQUEST);
    $file=fopen("form-save.txt","a");

    fwrite($file,"First Name :");
    fwrite($file, $firstname ."\n");
    fwrite($file,"Last Name :");
    fwrite($file, $lastname ."\n");
    fwrite($file,"Email :");
    fwrite($file, $email ."\n");

    fclose($file);
    header("location: apply.php");
 ?>
