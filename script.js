function generateBoard(size) {
    const container = document.querySelector('.container');
    let squares = container.querySelectorAll('div');
    squares.forEach((div)=> div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    for(i = 0; i < size**2; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = "salmon";
        square.style.border = "1px solid black"
        container.appendChild(square);
    };
};

generateBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        generateBoard(input);    
    } else {
        console.log('wrong size');
    }
}







