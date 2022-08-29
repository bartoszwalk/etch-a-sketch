

const grid = document.querySelector('.grid');
let gridBox = document.createElement('div');

gridBox.classList.add('gridBox');
let i = 0;
let j = 0;

function gridDimension(size) {
    let side = `${560 / size}px`;
    gridBox.style.height = side;
    gridBox.style.width = side;
}

function createGrid(num) {
    i = 0;
    while(i < num) {
        grid.appendChild(gridBox.cloneNode(true));
        i++ 
    }
}

