const container = document.querySelector('.container');
container.style.gridTemplateColumns = "repeat(16, 1fr)";
container.style.gridTemplateRows = "repeat(16, 1fr)";


for(i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.backgroundColor = "salmon";
    square.style.border = "1px solid black"
    container.appendChild(square);
};





