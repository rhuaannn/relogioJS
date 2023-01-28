let hours = new Date().getHours();
let hour = hours < 10 ? `0${hours}` : hours;
let minutes = new Date().getMinutes();
let minute =
  minutes < 10 ? `0${minutes}` : minutes;
let seconds = new Date().getSeconds();
let second =
  seconds < 10 ? `0${seconds}` : seconds;
let selectHours = document.querySelector(".hrs");
let selectMinutes =
  document.querySelector(".mtos");
let selectSeconds =
  document.querySelector(".sgd");
console.log(hours, minutes, seconds);
setInterval(() => {
  timer();
  time();
}, 1000);

function time() {

     document.querySelector(".hrs").innerHTML =
      hour;
  
    document.querySelector(".mtos").innerHTML =
      minute;


  if (second < 10) {
    document.querySelector(
      ".sgd"
    ).innerHTML = `0${second}`;
  } else {
    document.querySelector(".sgd").innerHTML =
      second;
  }
}
time(timer);
function timer() {
  second++;

  if (second == 60) {
    second = 0;
    minute++;

    if (minute == 60) {
      minute = 0;
      hour++;
    }
  }
}
timer(time);
