var cd=''+
'<!DOCTYPE html>'+
'<html>'+
'<body>'+
'<canvas id="myCanvas" width="200" height="100" style="border:0px solid #d3d3d3;margin-left:40%;margin-top:20%;">'+
'Your browser does not support the HTML5 canvas tag.</canvas>'+
'<script>'+
'var a=0;'+
'var c=document.getElementById("myCanvas");'+
'var ctx=c.getContext("2d");'+
'ctx.font="100px Arial";'+
'function countdown(){'+
'ctx.fillStyle="white";'+
'ctx.fillRect(0,0,200,100);'+
'ctx.strokeText(a=(a+1)%11,10,98);'+
'}'+
'setInterval(countdown,1000);'+
'</script>'+
'</body>'+
'</html>';
setTimeout(function(){document.write(cd);},1000);

/*
Exception: unterminated string literal
*/
