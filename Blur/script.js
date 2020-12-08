const loadtime = document.querySelector('.loading');
const background = document.querySelector('.background');


let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if(load > 99) {
        clearInterval(int);

        setTimeout(() => {
            load = 0;
            int = setInterval(blurring, 30);
        }, 6000);
    }

    loadtime.innerText = load + '%';
    loadtime.style.opacity = scale(load, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }


