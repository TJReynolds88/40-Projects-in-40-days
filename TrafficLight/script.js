const bulbs = document.querySelectorAll('.bulb');
let activeLight = 0;


setInterval(() => {
    changeLight();
}, 2000);



function changeLight() {
    bulbs[activeLight].className = 'bulb';
    activeLight++;

    if(activeLight > 2) {
        activeLight = 0
    }

    const currentLight = bulbs[activeLight]

    currentLight.classList.add(currentLight.getAttribute('color'));
}