  let uz = document.querySelector(".uzF");
  let ru = document.querySelector(".ruF");
  let en = document.querySelector(".enF");
  let selector = document.querySelector("#select");


function clock() {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("secunds");
  let dates = document.getElementById("date");
  let month = document.getElementById("month");
  let year = document.getElementById("year");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let d = new Date().getDate();
  let mon = new Date().getUTCMonth();
  let yil = new Date().getFullYear();

  year.innerHTML = yil;

  if (h < 10) {
    hours.innerHTML = `0${h}`;
  } else {
    hours.innerHTML = h;
  }

  if (m < 10) {
    minutes.innerHTML = `0${m}`;
  } else {
    minutes.innerHTML = m;
  }

  if (s < 10) {
    seconds.innerHTML = `0${s}`;
  } else {
    seconds.innerHTML = s;
  }

  if (d < 10) {
    dates.innerHTML = `0${d}`;
  } else {
    dates.innerHTML = d;
  }

  if (mon < 10) {
    month.innerHTML = `0${mon}`;
  } else {
    month.innerHTML = mon;
  }
}
let interval = setInterval(clock, 1000);
clock()


const lang = document.querySelectorAll('langChoose');

lang.forEach( (e) =>{
    e.addEventListener('click', ()=>{
        langEn.querySelector('.act').classList.remove('act');
        e.classList.add('act');
    });
});

console.log("Thanks for watching. Happy hacking !");

