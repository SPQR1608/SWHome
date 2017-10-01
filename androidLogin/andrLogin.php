<?php
    require_once "../func/functions.php";
    //require_once "andrUserStatus.php";
    if(isset($_POST["userLogin"]) || isset($_POST["userPass"])){
        $userLoginFromAnrd = $_POST["userLogin"];
        $userPassFromAndr = $_POST["userPass"];
        $result = checkAndrUser($userLoginFromAnrd, $userPassFromAndr);
        if($result == 1){
            changeAdrUserStatus($userLoginFromAnrd, 1);
        }
        echo $result;
    }
?>