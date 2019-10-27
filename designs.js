// Select color input
let myColor = document.getElementById('colorPicker').value;
// Select size input
let submitSize = document.getElementById('sizePicker');
// Select table element
const myTab = document.getElementById('pixelCanvas');

// makes a grid from user input.
function makeGrid() {
  const r = document.getElementById('inputHeight').value;
  const c = document.getElementById('inputWidth').value;
  for (let i = 1; i <= r; ++i) {
    const newRow = document.createElement('tr');
    for (let n = 1; n <= c; ++n) {
      const newCol = document.createElement('td');
      newRow.appendChild(newCol);
    };
    myTab.appendChild(newRow);
  };
}

// CLear the existing table
function killTable() {
  let killTbl = document.getElementById('pixelCanvas');
  while (killTbl.firstChild) {
    killTbl.removeChild(killTbl.firstChild);
  };
}

// change the backgroundColor of the square when the user clicks it
function changeSquareColor(event) {
  if (event.target.nodeName === 'TD' ) {
    event.target.style.backgroundColor = myColor;
  };
}

//update 'brush' color based on picker value
function changeBrushColor () {
  myColor = document.getElementById('colorPicker').value;
}

//resets the table to new user input
function resetGrid(event) {
  event.preventDefault();
  killTable();
  makeGrid();
}

// listen for click of the submit button; clear table and build new table
submitSize.addEventListener('submit' , resetGrid, false);

// Listen for dismisal of color picker window; call function
colorPicker.addEventListener('change', changeBrushColor, false);

// listen for user to click a cell in the canvas; call function
myTab.addEventListener('click' , changeSquareColor, false);
