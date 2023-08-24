
//initial declarations
//let body = document.getElementsByTagName('body');
let container = document.getElementById('container');
let clearButton = document.getElementById('clear');
let numOfDivs = 16; 
createGrid();

//popup asking for the size of the grid
clearButton.addEventListener('click', popupFunction);

function popupFunction() {
   numOfDivs = prompt('How many squares per side do you want your grid to have?', 16);
   if(numOfDivs > 100) {
    numOfDivs = prompt('Please choose a lower number');
   }
   console.log(numOfDivs)
   container.innerHTML = '';
   createGrid();
}

//function to create grid, add event listeners

function createGrid() {
    for (let i = 0; i < numOfDivs*numOfDivs; i++) {
    let square = document.createElement('div');
    square.classList.add('divSquare');
    container.appendChild(square);
    square.addEventListener('mouseover', colorFunction);
        console.log('grid created')

    }

}


//function to color squares

    function colorFunction(e) {
    e.target.classList.add('colored-black');
    }

