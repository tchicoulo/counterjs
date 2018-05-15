

let countDownElement = document.getElementById("countdown"); //pour selectionner L'ID dans HTML

let end = new Date('May 24 14:25:15 2018');
let s = 1000;  // 1000 millisecondes = 1s
let m = s * 60; // 60 sec = 1 minute
let h = m * 60; // 60 min = 1h
let d = h * 24; //1jour = 24h
let timer;
let now = new Date();
let stop = document.getElementById("pause");
let start = document.getElementById("play");
let reset = document.getElementById("reset");
timer = setInterval(showRemaining,1000); // décrémenter de 1sec => 1000ms.

function showRemaining(){
  now.setTime(now.getTime()+1000);
  let distance = end - now;
  let days = Math.floor(distance / d); //calcul des jours
  let hours = Math.floor((distance % d) / h); // calcul des heures
  let minutes = Math.floor((distance % h) / m); // calcul des minutes
  let seconds = Math.floor((distance % m) / s); // calcul des secondes
  countDownElement.innerHTML = days + ' days ' + ' : ' + hours + ' hrs ' + ' : ' + minutes + ' mins ' + ' : ' + seconds + ' secs ';

  /*  => C'est la même chose que :
  countDownElement.innerHTML = days + ' days ' + ' : ';
  countDownElement.innerHTML += hours + ' hrs ' + ' : ';
  countDownElement.innerHTML += minutes + ' mins ' + ' : ';
  countDownElement.innerHTML += seconds + ' secs '; */

  pause.onclick = function() {
      clearInterval(timer);
  } // Compte a rebours qui s'arrete
  play.onclick = function() {
      timer = setInterval(showRemaining, 1000);
  } // Compte a rebours qui se relance
  reset.onclick = function () {
    clearInterval(timer);
    countDownElement.innerHTML = 0 + ' day ' + ' : ' + 0 + ' hr ' + ' : ' + 0 + ' min '+ ' : ' + 0 + ' sec ';
  }

  if(distance < 0){
    clearInterval(timer);  //arrete l'heure si la date se termine
    countDownElement.innerHTML = 'MEOWW !';
  }
  }
