const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secondsEL = document.getElementById('seconds');

const newYears = '1 Jan 2021';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) /1000;
    const minutes = Math.floor(totalSeconds/ 60) % 60;
    const hours = Math.floor(totalSeconds /3600) % 24;
    const days = Math.floor(totalSeconds /3600/ 24);
    const seconds = Math.floor(totalSeconds) % 60;
    
    
daysEl.innerText = days;
hoursEl.innerText = hours;
minsEL.innerText = minutes;
secondsEL.innerText = seconds;

    
}

setInterval(countdown, 1000);
