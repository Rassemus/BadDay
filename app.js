const rain = document.querySelector('.rain');
const body = document.querySelector('body');
const header = document.querySelector('#header');
const weatherButton = document.querySelector('#weather__button');
const time = document.querySelector('#time');
const name = document.querySelector('#name');
const nameoutput = document.querySelector('#outputname');
const giveName = document.querySelector("#giveName")


function betterWeather() {
  if(name.value){
  rain.style.background = 'none';
  body.style.background =
    'rgba(255, 255, 255)' + ' url("./images/metsä.jpg")' + 'no-repeat';
  body.style.backgroundSize = 'cover';
  name.style.display = 'none';
  header.style.fontSize = '7em';
  header.style.color = '#00ffff';
  weatherButton.style.display = 'none';
  time.style.color = 'orange';
  giveName.style.display = "none"
  WhatTimeIsIt();
  }else{
    giveName.innerHTML = "Give me a name!"
  }
}



function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);

  time.innerHTML = h + ':' + m + ':' + s;
  t = setTimeout(function () {
    startTime();
  }, 500);
}
startTime();

function WhatTimeIsIt() {
  let now = new Date();
  let h = now.getHours();
  if (name.value) {
    if (h > 0 && h < 11) {
      header.innerHTML = name.value + ', this is going to be a great day!';
    }
    else if (h >= 11 && h < 19) {
      header.innerHTML = name.value + ', today is a great day!';
    } else {
      header.innerHTML = name.value + ', it was a great day!';
    }
  
  }
 }
