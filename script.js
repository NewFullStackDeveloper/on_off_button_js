function onload() {

document.getElementById('onoff').addEventListener('click', function(){
    
    let currentvalue = document.getElementById('onoff').value;
    if(currentvalue == "Off") {
        document.getElementById("onoff").value="On";
      }else{
        document.getElementById("onoff").value="Off";
      } 
    }

)


}



