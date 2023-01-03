const btnGrid = document.querySelector('.button-grid');
let color = 'black';
const COLORS = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', 'ffc6ff'];


function createGrid(gridSize) {
  const grid = document.querySelector('.grid');
  const squares = document.querySelectorAll('.square');
  squares.forEach(item => item.remove());

  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < Math.pow(gridSize, 2); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', addColor);
    grid.appendChild(square);
  }

}

createGrid(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    createGrid(input);
  } else {
    console.log('error');
  }
}

function addColor() {
  if (color === 'random') {
    randomIndex = Math.floor(Math.random() * COLORS.length);
    this.style.backgroundColor = COLORS[randomIndex];
    // this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else if (color === 'shading') {
    addShading(this);
  }
  else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

function resetGrid() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(item => item.style.backgroundColor = 'white');
}

function addShading(element) {
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


