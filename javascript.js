

const grid = document.querySelector('.grid');
let gridBox = document.createElement('div');
let gridSize = document.querySelector('.gridSize')
let slider = document.querySelector('.slider')

gridBox.classList.add('gridBox');

function gridDimension(size) {
    let side = `${560 / size}px`;
    gridBox.style.height = side;
    gridBox.style.width = side;
}

function createGrid(num) {
    i = 0;
    while (grid.firstChild) {
        grid.firstChild.remove()
    }
    while(i < num) {
        grid.appendChild(gridBox.cloneNode(true));
        i++;
    }
}

function hoverState (box) {
    box.style.backgroundColor = 'black'
}

function addHover() {
    let boxes = document.querySelectorAll(".gridBox")
    for (let box of boxes){
        box.addEventListener('mouseenter',() => {hoverState(box)})
    }
}

function updateText(val) {
    gridSize.textContent = `${val}x${val}`;
} 

function updateGrid(val) {
    gridDimension(val);
    createGrid(val * val);
    addHover()
    updateText(val)

}

gridDimension(16);
createGrid(256);
addHover();

slider.addEventListener('input', () => {updateGrid(slider.value)})
