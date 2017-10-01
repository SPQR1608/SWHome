<?php
    require_once "../func/functions.php";
    if(isset($_POST["checkAndrUser"])){
        $andrUserLog = $_POST["checkAndrUser"];
        $result = checkAndrUserStatus($andrUserLog);
        if($result == "1"){
            echo "online";
        }else{
            echo "offline";
        }
    }

?>