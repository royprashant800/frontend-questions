let form = document.getElementById("container");
let startbtn = document.getElementById("start-btn");
let resetbtn = document.getElementById("reset-btn");
let timer = document.getElementById("timer");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let secs = document.getElementById("secs");

let sec = 0;
let inte = null;

const resetStopwatch = () => {
  hour.innerText = "00";
  minute.innerText = "00";
  secs.innerText = "00";
};

window.addEventListener("load", () => resetStopwatch());

startbtn.addEventListener("click", () => {
  startbtn.style.pointerEvents = "none";
  inte = setInterval(() => {
    sec++;
    // console.log(sec);
    let minDisplay = Math.floor((sec % 3600) / 60);
    let hourDisplay = Math.floor(sec / 3600);
    let secDisplay = Math.floor(sec % 60);

    hour.textContent = hourDisplay.toString().padStart(2, "0");
    minute.textContent = minDisplay.toString().padStart(2, "0");
    secs.textContent = secDisplay.toString().padStart(2, "0");
  }, 1000);

  resetbtn.addEventListener("click", () => {
    startbtn.style.pointerEvents = "auto";
    clearInterval(inte);
    sec = 0;
    resetStopwatch();
  });
});
