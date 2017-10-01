<?
    require_once "func/functions.php";
$buffer = 0;
if($_POST){
    $ldStat = '';
    if(isset($_POST['hLedOnBut'])){
        $ldStat =  $_POST['hLedOnBut'];
        $buffer = 1;
    }
    if(isset($_POST['LedFromA'])){
        $ldStat =  $_POST['LedFromA'];
        $buffer = 2;
    }
    $myFile2 = "transfer/txt/out-1.txt";
    $fh2 = fopen($myFile2, 'w') or die("can't open file");
    fwrite($fh2, $ldStat{1}."32");
    fclose($fh2);

    $ldName = substr($ldStat, 3);
    changeLedStatus(1, $ldStat{0}, $ldName);
    echo '<script>ReloadPage()</script>';
}
    $checkStat = checkLedStatus(1);
    require_once "user/".$usID."/workspace.php";
?>
