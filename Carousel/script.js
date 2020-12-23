const images = document.getElementById('images');
const img = document.querySelectorAll('#images img');

let index = 0;

function slide() {
    index++

    if(index >= img.length) {
        index = 0;
    }

    images.style.transform = `translateX(${-index * 500}px)`;

    setTimeout(slide, 2000);

}

slide();