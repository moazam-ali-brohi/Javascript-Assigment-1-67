

function openModal(){
    document.getElementById("modal").style.display="block";
}
function closeModal(){
    document.getElementById("modal").style.display="none";
}


//Task-3
var zoomNum=10;
function zoomIn(){
    zoomNum+=10;
    document.getElementById("zoomValue").innerHTML=zoomNum;
    zoomStr=zoomNum.toString();
    var pix="px";
    var zoomInV=zoomStr+pix;
    document.getElementById("lorem").style.fontSize=zoomInV;
}



function zoomOut(){
    var zoomnum=document.getElementById("zoomValue").innerHTML;
    zoomnum-=10;
    document.getElementById("zoomValue").innerHTML=zoomnum;
    zoomStrr=zoomnum.toString();
    var pix="px";
    var zoomOutV= zoomStrr+pix;
    document.getElementById("lorem").style.fontSize=zoomOutV;
}