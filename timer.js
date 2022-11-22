var x = setInterval(function() {
  const date_future = new Date(2022, 11, 25, 19, 30, 0, 0);
  const date_now = new Date();

  seconds = Math.floor((date_future - (date_now))/1000);
  minutes = Math.floor(seconds/60);
  hours = Math.floor(minutes/60);
  days = Math.floor(hours/24);
  
  hours = hours-(days*24);
  minutes = minutes-(days*24*60)-(hours*60);
  seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

  days = Math.floor(days/11);

  document.getElementById("main").innerHTML = days + " dias " + hours + " horas " + minutes + " minutos " + seconds + " segundos";
 
  if (diffTime < 0) {
    clearInterval(x);
    document.getElementById("main").innerHTML = "Llego la hora";
  }
}, 1000);