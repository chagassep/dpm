function ponto1(){
    navigator.geolocation.getCurrentPosition(function(position) {
      document.getElementById("altura").value = position.coords.altitude
    });
  }
  
  function conta(){
    navigator.geolocation.getCurrentPosition(function(position) {
      document.getElementById("altura2").value = position.coords.altitude
    });
    var alt2 = document.getElementById("altura2").value 
    var alt1 = document.getElementById("altura").value
    document.getElementById("resultado").value = alt2 - alt1
  }
  