const container = document.querySelector('.container');

const btnGrid = document.querySelector('.button-grid');
const btnBlack = document.querySelector('.button-black');
const btnRainbow = document.querySelector('.button-rainbow');
const btnShading = document.querySelector('.button-shading');
const btnEraser = document.querySelector('.button-eraser');


const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);
let gridSize = 16;



function addShading(event) {
  const element = event.target;
  let elementColor = window.getComputedStyle(element).backgroundColor;
  switch (elementColor) {
    case 'rgb(255, 255, 255)':
      element.style.backgroundColor = '#e5e5e5';
      break;
    case 'rgb(229, 229, 229)':
      element.style.backgroundColor = '#cccccc';
      break;
    case 'rgb(204, 204, 204)':
      element.style.backgroundColor = '#b2b2b2';
      break;
    case 'rgb(178, 178, 178)':
      element.style.backgroundColor = '#999999';
      break;
    case 'rgb(153, 153, 153)':
      element.style.backgroundColor = '#7f7f7f';
      break;
    case 'rgb(127, 127, 127)':
      element.style.backgroundColor = '#666666';
      break;
    case 'rgb(102, 102, 102)':
      element.style.backgroundColor = '#4c4c4c';
      break;
    case 'rgb(76, 76, 76)':
      element.style.backgroundColor = '#333333';
      break;
    case 'rgb(51, 51, 51)':
      element.style.backgroundColor = '#191919';
      break;
  }
}

function addColor(event) {
  const element = event.target;
  element.style.backgroundColor = 'black';
}

function addRainbowColor(event) {
  const element = event.target;
  element.style.backgroundColor = randomColor();
}


function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = 'white';
}

function randomColor() {
  const COLORS = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', 'ffc6ff'];
  randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}


btnGrid.addEventListener('click', () =>  {
  input = prompt('Input grid size', 16);
  gridSize = parseInt(input);
  if (gridSize > 100) {
    gridSize = 100;
  } else if (input === null) {
    gridSize = 16;
  }
  removeGrid();
  createGrid(gridSize);
})

btnBlack.addEventListener('click', () => {
  removeGrid();
  createGrid(gridSize, addColor);
})

btnRainbow.addEventListener('click', () => {
  removeGrid();
  createGrid(gridSize, addRainbowColor);
})
btnShading.addEventListener('click', () => {
  removeGrid();
  createGrid(gridSize, addShading);
})

btnEraser.addEventListener('click', () => {
  removeGrid();
  createGrid(gridSize, removeColor);
})

function createGrid(gridSize, action) {
  for (let i = 0; i < Math.pow(gridSize, 2); i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.addEventListener('mouseover', action);
    
    // div.addEventListener('mouseleave', removeColor);

    grid.appendChild(div);
  }

  

  grid.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
}

function removeGrid() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(item => {
    item.remove();
  })
}
createGrid(gridSize);
