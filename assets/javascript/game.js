

console.log("Hi")


let count = 0;

const teamonenumshots = document.querySelector("#teamone-numshots");
const teamoneshootbutton = document.querySelector("#teamone-shoot-button");
const teamtwonumshots = document.querySelector("#teamtwo-numshots");
const teamtwoshootbutton = document.querySelector("#teamtwo-shoot-button");
const teamonenumgoals = document.querySelector("#teamone-numgoals");
const teamtwonumgoals = document.querySelector("#teamtwo-numgoals");
const numresets = document.querySelector("#numresets");
const resetbutton = document.querySelector("#reset-button");




teamoneshootbutton.addEventListener("click", function () {
    console.log("teamoneshots")
    let newCounterValue = Number(teamonenumshots.innerHTML) + 1;
    teamonenumshots.innerHTML = newCounterValue;
    if (Math.random() * 100 < 20) {
        let newCounterValue = Number(teamonenumgoals.innerHTML) + 1;
        teamonenumgoals.innerHTML = newCounterValue;
        console.log("goal");


    }

})


teamtwoshootbutton.addEventListener("click", function () {
    console.log("teamtwoshots")
    let newCounterValue = Number(teamtwonumshots.innerHTML) + 1;
    teamtwonumshots.innerHTML = newCounterValue;
    if (Math.random() * 100 < 20) {
        let newCounterValue = Number(teamtwonumgoals.innerHTML) + 1;
        teamtwonumgoals.innerHTML = newCounterValue;
        console.log("goal");

    }

})


resetbutton.addEventListener("click", function () {
    console.log("resets")
    teamonenumshots.innerHTML = 0;
    teamtwonumshots.innerHTML = 0;
    teamonenumgoals.innerHTML = 0;
    teamtwonumgoals.innerHTML = 0;

})