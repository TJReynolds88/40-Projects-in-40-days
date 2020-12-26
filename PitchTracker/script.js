
//Pitch Displays
let pitchnumber = 0;
let ballspitch = 0;
let strikespitch = 0;
const pitches = document.getElementById('pitches');
const strikes = document.getElementById('strike-count');
const balls = document.getElementById('ball-count');
//Pitch Buttons
const addstrike = document.getElementById('strike+');
const substrike = document.getElementById('strike-');

const addball = document.getElementById('ball+');
const subball = document.getElementById('ball-');

//Reset 
const reset = document.getElementById('reset');
reset.addEventListener('click', (e) => {
    strikespitch = 0;
    strikes.innerHTML = strikespitch;
    ballspitch = 0;
    balls.innerHTML = ballspitch;
    pitchCount();
});

//Event Listeners Adds strikes call pitch count.
addstrike.addEventListener('click', (e) => {
    strikespitch++;
    strikes.innerHTML = strikespitch;
    pitchCount();
});
substrike.addEventListener('click', (e) => {
    strikespitch--;
    strikes.innerHTML = strikespitch;
    pitchCount();
});
addball.addEventListener('click', (e) => {
    ballspitch++;
    balls.innerHTML = ballspitch;
    pitchCount();
});
subball.addEventListener('click', (e) => {
    ballspitch--;
    balls.innerHTML = ballspitch;
    pitchCount();
});



function pitchCount() {
    let pitchnumber = ballspitch + strikespitch;
     pitches.innerHTML = pitchnumber;

}



