
<?php
if($_POST){
	$S2 =  $_POST['hLedOnBut'];
	$myFile2 = "txt/out-1.txt";
	$fh2 = fopen($myFile2, 'w') or die("can't open file");
	fwrite($fh2, $S2);
	fclose($fh2);
	echo $S2*(-1);
}
?>

