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
        square.style.border = "0.1px solid lightgray";
        square.addEventListener("mouseover", colorSquare);
        container.appendChild(square);
    };
};

generateBoard(32);

function changeSize(input) {
    let error = document.querySelector('.error');
    if (input >= 2 && input <= 100) {
        generateBoard(input);
        error.style.display = 'none';    
    } else {
        error.style.display = 'block';
    };
};

function changeColor(choice) {
    color = choice;
};

function colorSquare() {
    if (click) {
        if (color === 'rainbow') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else if (color === 'custom'){
            let customColor = document.getElementById('color');
            this.style.backgroundColor = customColor.value;
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

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != "BUTTON") {
        click = !click;
    }
})









