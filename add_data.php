<?php
        $S1 =  $_GET['temperature'];
	    $myFile1 = "transfer/txt/in-1.txt";
		$fh1 = fopen($myFile1, 'w') or die("can't open file");
		fwrite($fh1, $S1);
		fclose($fh1);
        $myFile = "transfer/txt/out-1.txt";
        $fh = fopen($myFile, 'r');
        $theData = fread($fh, filesize($myFile));
        fclose($fh);
        echo $theData;
?>

