let spans = document.querySelectorAll('.span');
let para = document.querySelectorAll('.span p');
for (let i = 0; i < spans.length; i++) {
  spans[i].style.transform = 'rotate(' + 30 * i + 'deg' + ')';
  para[i].style.transform = 'rotate(' + 30 * (12 - i) + 'deg' + ')';
}

//clock timing
const hourHanlde = document.querySelector('.hourHandle');
const minuteHandle = document.querySelector('.minuteHandle');
const secondHandle = document.querySelector('.secondHandle');
// 60s * 60m = 3600s == 1hour , 12 hours  = 43200
let date = new Date();
let second = date.getSeconds();
let rotateSec = second * 6;
let minute = date.getMinutes();
let rotateMin = minute * 6;
let hour = date.getHours();
let rotateHour = (hour + minute / 60) * 30;
let minMove = false;
let hourMove = false;
//intial time
secondHandle.style.transform = `rotate(${rotateSec}deg)`;
minuteHandle.style.transform = `rotate(${rotateMin}deg)`;
hourHanlde.style.transform = `rotate(${rotateHour}deg)`;
console.log(rotateHour);
window.addEventListener('load', () => {
  let secInterval = setInterval(() => {
    rotateSec += 6;
    secondHandle.style.transform = `rotate(${rotateSec}deg)`;
    if (rotateSec == 360) {
      rotateSec = 0;
      minMove = true;
    }
    if (minMove) {
      rotateMin += 6;
      rotateHour += 30 / 60;
      minuteHandle.style.transform = `rotate(${rotateMin}deg)`;
      minMove = false;
      hourHanlde.style.transform = `rotate(${rotateHour}deg)`;
      if (rotateMin == 360) {
        rotateMin = 0;
      }
      if (rotateHour == 360) {
        rotateHour = 0;
      }
    }
  }, 1000);
});
