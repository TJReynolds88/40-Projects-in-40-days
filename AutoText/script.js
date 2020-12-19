const text = document.getElementById("text");
const program = "This text was created with Auto Text done in JavaScript";
let index = 1;


setInterval(writeText, 100);

function writeText(){

    text.innerText = program.slice(0, index)

    index++;

    if(index > program.length) {
        index = 1;
    }

}