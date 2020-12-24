const d = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let weekdays = ["Sunday", "Munday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("month").innerHTML = months[d.getMonth()];
document.getElementById("year").innerHTML = d.getFullYear();
document.getElementById("date").innerHTML = d.getDate();
document.getElementById("day").innerHTML = weekdays[d.getDay()];