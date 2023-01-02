const container = document.querySelector('.container');

const btn = document.createElement('button');
btn.textContent = 'Grid size';
container.appendChild(btn);


const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);
let gridSize = 16;


function addColor(event) {
  const element = event.target;
  element.style.backgroundColor = 'red';
}
function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = '#1d1d1d';
}



btn.addEventListener('click', function (e) {
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

function createGrid(gridSize) {
  for (let i = 0; i < Math.pow(gridSize, 2); i++) {
    const div = document.createElement('div');
    div.classList.add('square');

    div.addEventListener('mouseover', addColor);
    div.addEventListener('mouseleave', removeColor);

    grid.appendChild(div);
    console.log('square');
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
