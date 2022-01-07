console.log("test");

let clock = document.getElementById("clock");

let countDownDate = new Date("Sep 6, 2023 17:00:00").getTime();

console.log(countDownDate);

let x = setInterval(() => {
  let now = new Date().getTime();

  let timeDistanse = countDownDate - now;

  let days = Math.floor(timeDistanse / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeDistanse % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeDistanse % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDistanse % (1000 * 60)) / 1000);

  clock.innerHTML = `${days} d  ${hours} h  ${minutes} m  ${seconds} s `;

  if (timeDistanse < 0) {
    clearInterval(x);
    clock.innerHTML = `Vi har tagit examen!!!`;
  }
}, 1000);
