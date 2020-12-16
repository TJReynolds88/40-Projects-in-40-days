const trickBtn = document.getElementById('trick');
const btnContainer = document.querySelector('.btn-container');


btnContainer.getElementsByClassName.flexDirection = 'column';

trickBtn.addEventListener('mousemove', (e) => {
    const currentDir = btnContainer.style.flexDirection;
    if(currentDir === 'column') {
        btnContainer.style.flexDirection = 'column-reverse';
    }else {
        btnContainer.style.flexDirection = 'column';
    }
})