<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <script src="js/jquery-1.12.3.min.js"></script>
    <script src="js/func.js"></script>
    <link rel="stylesheet" type="text/css" href="mainSensors.css">
    <script>
        function show()  
        {  
            $.ajax({  
                url: "transfer/temp-1.php",  
                cache: false,  
                success: function(html){  
                    $("#content").html(html+' &degC');
				}
             });
             $.ajax({  
                url: "transfer/ledstate.php",  
                cache: false,  
                success: function(html){  
                    $("#content-3").html(html); 
                }
             });
            /*$.ajax({
               url: "hSensors.php",
                cache: false,
                success: function(html){
                    $("#content").html(html);
                }
            });*/

        }
        $(document).ready(function(){  
            show();  
            setInterval('show()',200);
        }); 
        
 
      function AjaxFormRequest(result_id,led,url) {
      jQuery.ajax({
      url:     url,
      type:     "POST",
      dataType: "html",
      data: jQuery("#"+led).serialize(),
         });

       }
        function ledStatus(){
            var input = document.createElement("p"),
                button = document.getElementById('hLedOnButton');

            input.innerHTML='<p class = "ledStat">\
        <p> <input type="image" id="hLedOnButton" name="hLedOnBut" src="images/icons/off1.png" alt="" value="0" width="40" height="40">';
            button.parentNode.replaceChild(input, button);
        }

</script>
</head>
    <body>
    <div class="house">
        <div>
            <div class="r">
                <div class="r2" style="display:inline-block; height: 80px">
                </div>
            </div>

            <div id="newInst"></div>
            <div class="hLed" id="hLed1">
                <form action="" id="hLedOn" method="post">
                     <?
                     if($checkStat[0]['status']==1 && $checkStat[0]['ledName']=="bedRoom1"){
                        ?>
                         <input type="image" id="hLedOnButton" name="hLedOnBut" src="images/icons/on1.png" alt="" value="01-bedRoom1" width="40" height="40">
                         <?
                     }
                     if($checkStat[0]['status']==0 && $checkStat[0]['ledName']=="bedRoom1"){
                         ?>
                         <input type="image" id="hLedOnButton" name="hLedOnBut" src="images/icons/off1.png" alt="" value="12-bedRoom1" width="40" height="40">
                         <?
                     }
                     ?>

                </form>
            </div>


            <div class="hLed" id="hLed2">
                <form action="" id="hLedOn" method="post">
                    <?
                    if($checkStat[1]['status']==1 && $checkStat[1]['ledName']=="kitchen"){0
                        ?>
                        <input type="image" id="hLedOnButton" name="hLedOnBut" src="images/icons/on1.png" alt="" value="03-kitchen" width="40" height="40">
                        <?
                    }
                    if($checkStat[1]['status']==0 && $checkStat[1]['ledName']=="kitchen"){
                        ?>
                        <input type="image" id="hLedOnButton" name="hLedOnBut" src="images/icons/off1.png" alt="" value="14-kitchen" width="40" height="40">
                        <?
                    }
                    ?>

                </form>
                <div class="kitchTemp" style="background-color:rgba(16, 185, 252, 0.25); width: 190px; border-radius: 30px; text-align: center; margin-top: 20px">
                    <table>
                        <tr>
                            <td>
                                <img src="images/icons/thermometer.png" alt="" width="40" height="40">
                            </td>
                            <td>
                                <div class="r3" id="content" style=" font-size: 30px"></div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="hLed" id="hLed3">
                <form action="" id="hLedOn" method="post">
                    <?
                    if($checkStat[2]['status']==1 && $checkStat[2]['ledName']=="bedRoom2"){
                        ?>
                        <input type="image" id="hLedOnButton" name="hLedOnBut" src="images/icons/on1.png" alt="" value="05-bedRoom2" width="40" height="40">
                        <?
                    }
                    if($checkStat[2]['status']==0 && $checkStat[2]['ledName']=="bedRoom2"){
                        ?>
                        <input type="image" id="hLedOnButton" name="hLedOnBut" src="images/icons/off1.png" alt="" value="16-bedRoom2" width="40" height="40">
                        <?
                    }
                    ?>

                </form>
            </div>

            <div class="hLed" id="hLed4">
                <form action="" id="hLedOn" method="post">
                    <?
                    if($checkStat[3]['status']==1 && $checkStat[3]['ledName']=="bedRoom3"){
                        ?>
                        <input type="image" id="hLedOnButton" name="hLedOnBut" src="images/icons/on1.png" alt="" value="07-bedRoom3" width="40" height="40">
                        <?
                    }
                    if($checkStat[3]['status']==0 && $checkStat[3]['ledName']=="bedRoom3"){
                        ?>
                        <input type="image" id="hLedOnButton" name="hLedOnBut" src="images/icons/off1.png" alt="" value="18-bedRoom3" width="40" height="40">
                        <?
                    }
                    ?>

                </form>
            </div>

            <div class="hLed" id="hLed5">
                <form action="" id="hLedOn" method="post">
                    <?
                   /* if($checkStat[4]['status']==1 && $checkStat[4]['ledName']=="showerRoom"){
                        ?>
                        <input type="image" id="hLedOnButton" name="hLedOnBut" src="images/icons/on1.png" alt="" value="09-showerRoom" width="40" height="40">
                        <?
                    }
                    if($checkStat[4]['status']==0 && $checkStat[4]['ledName']=="showerRoom"){
                        ?>
                        <input type="image" id="hLedOnButton" name="hLedOnBut" src="images/icons/off1.png" alt="" value="10-showerRoom" width="40" height="40">
                        <?
                    }*/
                    ?>

                </form>
            </div>

            <div class="hLed" id="hLed6">
                <form action="" id="hLedOn" method="post">
                    <?
                   /* if($checkStat[5]['status']==1 && $checkStat[5]['ledName']=="toilet"){
                        ?>
                        <input type="image" id="hLedOnButton" name="hLedOnBut" src="images/icons/on1.png" alt="" value="0a-toilet" width="40" height="40">
                        <?
                    }
                    if($checkStat[5]['status']==0 && $checkStat[5]['ledName']=="toilet"){
                        ?>
                        <input type="image" id="hLedOnButton" name="hLedOnBut" src="images/icons/off1.png" alt="" value="1b-toilet" width="40" height="40">
                        <?
                    }*/
                    ?>

                </form>
            </div>

        </div>

    </div>

    </body>
</html> 