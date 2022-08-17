var seconds = 00;
var tens = 00;
var appendTens= document.querySelector("#tens");
var appendSeconds = document.querySelector("#seconds");
var appendStart = document.querySelector(".start");
var appendStop = document.querySelector(".stop");
var appendReset = document.querySelector(".reset");

var Interval;

appendStart.addEventListener("click", function() {
  // clearInterval(Interval);
  Interval = setInterval(startTime, 10);
});

appendStop.addEventListener("click", function() {
  clearInterval(Interval);
});

appendReset.addEventListener("click", function() {
  clearInterval(Interval);
  seconds = "00";
  tens = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
});



function startTime() {
  tens++;
  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    tens = 0;
    appendTens.innerHTML = "0" + tens;
    appendSeconds.innerHTML = "0" + seconds;
  }
  if (second > 9) {
    apppendSeconds.innerHTML = seconds;
  }
}
