let color = "black";
let click = false;

function generateBoard(size) {
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll('div');
    squares.forEach((div)=> div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    for(i = 0; i < size**2; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = "white";
        square.style.border = "0.5px solid black";
        square.addEventListener("mouseover", colorSquare);
        container.appendChild(square);
    };
};

generateBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        generateBoard(input);    
    } else {
        console.log('wrong size');
    };
};

function changeColor(choice) {
    color = choice;
};

function colorSquare() {
    if (click) {
        if (color === 'rainbow') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    };
};

function resetBoard() {
    let container = document.querySelector('.container');
    let squares = container.querySelectorAll('div');
    squares.forEach((div)=> div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', ()=>{
    click = !click;
})









