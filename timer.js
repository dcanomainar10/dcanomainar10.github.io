var countDownDate = new Date(2022, 11, 25, 19, 0, 0).getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 10 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("main").innerHTML = days + " dias " + hours + " horas "
  + minutes + " minutos " + seconds + " segundos";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("main").innerHTML = "Llego la hora";
  }
}, 1000);