<script>

    function move(div){
        myBr =
            document.onmousedown=function(){return false}
        div.style.cursor='move';
        document.onmousemove=function(e){
            e = e || window.event;
            x=e.pageX || e.clientX;
            y=e.pageY || e.clientY;
            left1=div.offsetLeft;
            top1=div.offsetTop;
            left1=x-left1;
            top1=y-top1;
            document.onmousemove=function(e){
                e = e || window.event;
                x=e.pageX || e.clientX;
                y=e.pageY || e.clientY;
                div.style.top=y-top1+'px';
                div.style.left=x-left1+'px';
            }
        }
        document.onmouseup=function(){
            div.style.cursor='auto';
            document.onmousedown=function(){}
            document.onmousemove=function(){}
        }
    }

    function NewInstElement(obj){
        var input = document.createElement("p"),
            div = document.getElementById('newInst');

        switch (obj.id){
            case 'bLed':
                input.innerHTML='<div style="position: absolute" onMouseDown="move(this)">\
                <img src="images/icons/off1.png" alt="Свет" width="64" height="64"></div>';
                break;
            case 'bTherm':
                input.innerHTML='<div style="position: absolute" onMouseDown="move(this)">\
                <img src="images/icons/thermometer.png" alt="Температура" width="64" height="64"></div>';
                break;
            case 'bHum':
                input.innerHTML='<div style="position: absolute" onMouseDown="move(this)">\
                <img src="images/icons/Humidity.png" alt="Влажность" width="64" height="64"></div>';
                break;
        }
        div.parentNode.replaceChild(input, div);
    }
</script>
<div class="instpanel">
            <table align="center">
                <tr>
                    <td>
                        <img src="images/icons/off1.png" alt="Свет" width="64" height="64">
                    </td>
                    <td>
                        <img src="images/icons/thermometer.png" alt="Температура" width="64" height="64">
                    </td>
                    <td>
                        <img src="images/icons/Humidity.png" alt="Влажность" width="64" height="64">
                    </td>
                </tr>
                <tr>
                    <td>
                        <button id="bLed" onclick="NewInstElement(this)">+</button>
                    </td>
                    <td>
                        <button id="bTherm" onclick="NewInstElement(this)">+</button>
                    </td>
                    <td>
                        <button id="bHum" onclick="NewInstElement(this)">+</button>
                    </td>
                </tr>
            </table>
</div>
