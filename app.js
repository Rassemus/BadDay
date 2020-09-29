const rain = document.querySelector('.rain');
const body = document.querySelector('body');
const header = document.querySelector('#header');
const weatherButton = document.querySelector('#weather__button');
const time = document.querySelector('#time');

function betterWeather() {
  rain.style.background = 'none';
  body.style.background =
    'rgba(255, 255, 255)' + ' url("./images/metsä.jpg")' + 'no-repeat';
  body.style.backgroundSize = 'cover';
  header.innerHTML = 'Today is a great day!';
  header.style.fontSize = '7em';
  header.style.color = '#00ffff';
  weatherButton.style.display = 'none';
  time.style.color = 'orange';
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  time.innerHTML = h + ':' + m + ':' + s;
  t = setTimeout(function () {
    startTime();
  }, 500);
}
startTime();
