const resultFood = document.getElementById("result_food");
const google = "http://www.google.com";

const mixW = localStorage.getItem("Weather");
const mixWA = JSON.parse(mixW);
const mixF = localStorage.getItem("Feel");
const mixFA = JSON.parse(mixF);

// const mixY = localStorage.getItem("Yesterday");
// const mixYA = JSON.parse(mixY);
// const mixWHO = localStorage.getItem("Who");
// const mixWHOA = JSON.parse(mixWHO);
// const mixH = localStorage.getItem("How");
// const mixHA = JSON.parse(mixH);

let last = mixWA.filter((x) => mixFA.includes(x));
// let y_who = mixWA.filter((x) => mixWHOA.includes(x));
// let wfywho = w_f.filter((x) => y_who.includes(x));
// let last = wfywho.filter((x) => mixHA.includes(x));

const chosenFood = last[Math.floor(Math.random() * last.length)];

resultFood.innerText = chosenFood;

function locationHref() {
  window.open(`${google}/search?q=${chosenFood}&tbm=isch&tbs=qdr:y`, "_blank");
}
